import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/services/login.service';
import { UserInfoService } from '../../services/user-info.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  showFiller = false;
  constructor(
    private userInfoService: UserInfoService,
    public router: Router,
    private loginService: LoginService) {}

  ngOnInit(): void {
    if (this.userInfoService.getStoredToken() == null) {
      this.router.navigateByUrl('/login');
    }
  }

  logout() {
    this.loginService.logout();
    this.navigatetToLogin();
  }

  navigatetToLogin(){
      this.router.navigate(['/login']); 
  }
  title = 'SMAAdminClient';
}
