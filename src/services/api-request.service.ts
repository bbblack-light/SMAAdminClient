
import { throwError as observableThrowError, Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { AppConfig } from '../app-config';
import { OperationStatusService } from './operation-status.service';
import { UserInfoService } from './user-info.service';

@Injectable()
export class ApiRequestService {
  API_PREFIX = 'api/';
  constructor(
    private appConfig: AppConfig,
    private http: HttpClient,
    private router: Router,
    private userInfoService: UserInfoService,
    private operationStatusService: OperationStatusService
  ) {
  }

  /**
   * This is a Global place to add all the request headers for every REST calls
   */
  getHeaders(): HttpHeaders {
    let headers = new HttpHeaders();
    const token = this.userInfoService.getStoredToken();
    headers = headers.append('Content-Type', 'application/json');
    if (token !== null) {
      headers = headers.append('Authorization', token);
    }
    return headers;
  }
  getHeadersFile(): HttpHeaders {
    let headers = new HttpHeaders();
    const token = this.userInfoService.getStoredToken();
    headers = headers.append('Content-Type', 'multipart/form-data');
    if (token !== null) {
      headers = headers.append('Authorization', token);
    }
    return headers;
  }

  get(url: string, urlParams?: HttpParams, responseT?: boolean): Observable<any> {
    const me = this;
    if (responseT) {
      return this.http.get(this.appConfig.baseApiPath + url, {
        headers: this.getHeaders(),
        responseType: 'arraybuffer',
        params: urlParams
      }).pipe(catchError(function (error: any) {
        console.log('Some error in catch');
        if (error.status === 401 || error.status === 403) {
          // me.router.navigate(['/logout']);
        }
        return observableThrowError(error || 'Server error');
      }));
    } else {
      return this.http.get(this.appConfig.baseApiPath + url, { headers: this.getHeaders(), params: urlParams }).pipe(
        catchError(function (error: any) {
          console.log('Some error in catch');
          if (error.status === 401 || error.status === 403) {
            // me.router.navigate(['/logout']);
          }
          else {
            me.operationStatusService.openSnackBarError(url, error);
          }
          return observableThrowError(error || 'Server error');
        }));
    }
  }


  postWithFile(url: string, body: FormData): Observable<any> {
    let headers = new HttpHeaders();
    const token = this.userInfoService.getStoredToken();
    if (token !== null) {
      headers = headers.append('Authorization', token);
    }
    const me = this;

    return this.http.post(this.appConfig.baseApiPath + url, body, { headers }).pipe(
      catchError(function (error: any) {
        if (error.status === 401) {
          // me.router.navigate(['/logout']);
        }
        return observableThrowError(error || 'Server error');
      }));
  }

  post(url: string, body: Object, neededStatusBar = false, message="Добавление прошло успешно"): Observable<any> {
    const me = this;
    return this.http.post(this.appConfig.baseApiPath + url, JSON.stringify(body), { headers: this.getHeaders() }).pipe(
      tap(_ => {
        if (neededStatusBar) {
          me.operationStatusService.openSnackBarNoError(message);
        }
      }),
      catchError(function (error: any) {
        if (error.status === 401) {
          // me.router.navigate(['/logout']);
        }
        else{
          me.operationStatusService.openSnackBarError(url, error);
        }
        return observableThrowError(error || 'Server error');
      }));
  }
  postFile(url: string, body: Object, neededStatusBar = false, message="Добавление прошло успешно"): Observable<any> {
    const me = this;
    return this.http.post(this.appConfig.baseApiPath + url, JSON.stringify(body), { headers: this.getHeadersFile() }).pipe(
      tap(_ => {
        if (neededStatusBar) {
          me.operationStatusService.openSnackBarNoError(message);
        }
      }),
      catchError(function (error: any) {
        if (error.status === 401) {
          // me.router.navigate(['/logout']);
        }
        else{
          me.operationStatusService.openSnackBarError(url, error);
        }
        return observableThrowError(error || 'Server error');
      }));
  }

  put(url: string, body: Object, neededStatusBar = false, message="Изменение прошло успешно"): Observable<any> {
    const me = this;
    return this.http.put(this.appConfig.baseApiPath + url, JSON.stringify(body), { headers: this.getHeaders() }).pipe(
      tap(_ => {
        if (neededStatusBar) {
          me.operationStatusService.openSnackBarNoError(message);
        }
      }),
      catchError(function (error: any) {
        if (error.status === 401) {
          // me.router.navigate(['/logout']);
        }
        else  {
          me.operationStatusService.openSnackBarError(url, error);
        }
        return observableThrowError(error || 'Server error');
      }));
  }

  delete(url: string, neededStatusBar = false, message = "Удаление прошло успешно"): Observable<any> {
    const me = this;
    return this.http.delete(this.appConfig.baseApiPath + url, { headers: this.getHeaders() }).pipe(
      tap(_ => {
        if (neededStatusBar) {
          me.operationStatusService.openSnackBarNoError(message);
        }
      }),
      catchError(function (error: any) {
        if (error.status === 401) {
          // me.router.navigate(['/logout']);
        }
        else{
          me.operationStatusService.openSnackBarError(url, error);
        }
        return observableThrowError(error || 'Server error');
      }));
  }
}
