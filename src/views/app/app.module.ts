import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { LoginPageComponent } from './../login-page/login-page.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserInfoService } from 'src/services/user-info.service';
import { AppConfig } from 'src/app-config';
import { ApiRequestService } from 'src/services/api-request.service';
import { UserService } from 'src/services/user.service';
import { LoginService } from 'src/services/login.service';

@NgModule({
  declarations: [AppComponent, LoginPageComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [
    AppConfig,
    ApiRequestService,
    UserService,
    UserInfoService,
    LoginService 
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
