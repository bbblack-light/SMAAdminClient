import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { ApiRequestService } from './api-request.service';
import { map } from 'rxjs/operators';
import { UserInfoService, LoginInfoInStorage } from './user-info.service';
import { RegisterUser } from '../model/RegisterUser';

export interface LoginRequestParam {
  username: string;
  password: string;
}

@Injectable()
export class LoginService {
  private isLoginEvent;
  public isLoginEvent$;
  public landingPage: string = "/";

  constructor(
    private router: Router,
    private userInfoService: UserInfoService,
    private apiRequest: ApiRequestService
  ) {
    this.isLoginEvent = new Subject<boolean>();
    this.isLoginEvent$ = this.isLoginEvent.asObservable();
  }


  getToken(username: string, password: string): Observable<any> {
    let me = this;

    let bodyData: LoginRequestParam = {
      "username": username,
      "password": password,
    }
    /*
        Using BehaviorSubject instead of Subject
        In Angular services are initialized before the components, if any component is
        subscribing, it will only receive events which are executed after subscription.
        therefore if you put a syncronize next() in the service, the component wont get it.

        A BehaviourSubject will always provide the values wheather the subscription happened after or before event

    */

    let loginInfoReturn: LoginInfoInStorage; // Object that we want to send back to Login Page

    return this.apiRequest.post('session', bodyData)
      .pipe(map(jsonResp => {
        if (jsonResp !== undefined && jsonResp !== null) {
          //Create a success object that we want to send back to login page
          loginInfoReturn = {
            "success": true,
            "message": jsonResp.operationMessage,
            "landingPage": this.landingPage,
            "user": {
              "userId": jsonResp.item.userId,
              "email": jsonResp.item.email,
              "displayName": jsonResp.item.firstName + " " + jsonResp.item.lastName,
              "token": jsonResp.item.token,
            }
          };
          // store username and jwt token in session storage to keep user logged in between page refreshes

          this.userInfoService.storeUserInfo(JSON.stringify(loginInfoReturn.user));
          this.isLoginEvent.next(true);
        } else {
          //Create a faliure object that we want to send back to login page
          loginInfoReturn = {
            "success": false,
            "message": jsonResp.msgDesc,
            "landingPage": "/catalog"
          };
        }
        return loginInfoReturn;
      }));
  }

  logout(navigatetoLogout = true): void {
    // clear token remove user from local storage to log user out
    this.userInfoService.removeUserInfo();
    if (navigatetoLogout) {
      // this.router.navigate(["/"]);
      this.isLoginEvent.next(true);
    }
  }

  register(model: RegisterUser): Observable<any> {
    return this.apiRequest.post('registration', model);
  }

}
