import { Injectable } from '@angular/core';

@Injectable()
export class CommonService {

    constructor() { }

    /**
     * Gets the root URL for the current host window if
     * not localhost or default Django installation server URL
     * @return string
     */
    rootURL(): string {
        if (window.location.hostname !== 'localhost') {
            // We are probably running on live server
            return window.location.protocol + '//' + window.location.host;
        } else {
            return 'http://127.0.0.1:8000';
        }
    }

}
