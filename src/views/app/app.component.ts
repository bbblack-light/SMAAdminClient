import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserInfoService } from '../../services/user-info.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  private userInfoService: UserInfoService;
  private router: Router;
  ngOnInit(): void {
    if (
      this.userInfoService.getStoredToken !== undefined &&
      this.userInfoService.getStoredToken == null
    ) {
      console.log('hi');
      this.router.navigateByUrl('/login');
    }
  }
  title = 'SMAAdminClient';
}
