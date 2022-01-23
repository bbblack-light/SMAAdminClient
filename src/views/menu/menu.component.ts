import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/services/login.service';
import { UserInfoService } from '../../services/user-info.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(
    // private loginService: LoginService,
    public router: Router) { }

  ngOnInit(): void {
  }

  logout() {
    // this.loginService.logout();
    this.navigatetToLogin();
  }

  navigatetToLogin(){
      this.router.navigate(['/login']); 
  }
}
