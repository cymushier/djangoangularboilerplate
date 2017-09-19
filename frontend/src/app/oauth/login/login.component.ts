import { Component, OnInit } from '@angular/core';

import { Login } from './login';

import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login: Login = {
    username: '',
    password: ''
  };
  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  loginUser() {
    this.loginService.login(this.login.username, this.login.password);
  }

  /**
   * Checks if the user can successfully login based on the supplied parameters
   */
  canLogin(): boolean {
    return this.login.username.length > 0 && this.login.password.length > 0;
  }

}
