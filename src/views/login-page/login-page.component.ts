import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/services/login.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {
  hide = true;
  errMsg: string = '';
  model: any = {};
  constructor(
    private loginService: LoginService,
    private router: Router) {}

  ngOnInit() {}

  login() {
    // this.loginService.getToken(this.model.username, this.model.password)
    //   .subscribe(resp => {
    //     // console.log(resp);
    //       if (resp.user === undefined || resp.user.token === undefined || resp.user.token === 'INVALID') {
    //         this.errMsg = 'Неверное имя пользователя или пароль';
    //         return;
    //       }
    //       this.navigate();
    //     },
    //     errResponse => {
    //       switch (errResponse.status) {
    //         case 401:
    //           this.errMsg = 'Неверное имя пользователя или пароль';
    //           break;
    //         case 403:
    //           this.errMsg = 'Нет доступа';
    //           break;
    //         case 404:
    //           this.errMsg = 'Пользователь не найден';
    //           break;
    //         case 408:
    //           this.errMsg = 'Истекло вря ожидания';
    //           break;
    //         case 500:
    //           this.errMsg = 'Internal Server Error';
    //           break;
    //         default:
    //           this.errMsg = 'Server Error';
    //           break;
    //       }
    //     }
    //   );
  }

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if (event.keyCode === 13) {
        this.login();
    }
  }
  
  navigate(){
    this.router.navigate(['/']);
  }

}
