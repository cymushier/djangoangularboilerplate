import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';

import { CommonService } from '../../common.service';

@Injectable()
export class LoginService {

    constructor(private commonService: CommonService, private http: Http, private router: Router) { }

    login(username: string, password: string): void {
        this.http.post(
            this.commonService.rootURL() + '/api/token',
            {'username': username, 'password': password}
        ).subscribe((response) => {
            try {
                sessionStorage.setItem('token', response.json().token);
                if (response.json().token) {
                    this.router.navigateByUrl('/dashboard');
                }
            } catch (error) {
                console.log(error);
            }
        });
    }

    verifyLogin(loginUrl: string, nextUrl?: string): void {
        const headers = new Headers(
            {'Content-Type': 'application/json' });
        const options = new RequestOptions({headers: headers});

        const data = {
            'token': sessionStorage.getItem('token')
        };

        const navigateTo = nextUrl || '/dashboard';

        this.http.post(
            this.commonService.rootURL() + '/api/token-verify', data).subscribe((response) => {
            try {
                if (response.json().token) {
                    this.router.navigateByUrl(navigateTo);
                } else {
                    this.router.navigateByUrl(loginUrl); // Redirect to login
                }
            } catch (error) {
                console.log(error);
                this.router.navigateByUrl(loginUrl); // Redirect to login
            }
        });
    }

}
