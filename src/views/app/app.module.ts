import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserInfoService } from 'src/services/user-info.service';
import { AppConfig } from 'src/app-config';
import { ApiRequestService } from 'src/services/api-request.service';
import { UserService } from 'src/services/user.service';
import { LoginService } from 'src/services/login.service';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import { MenuComponent } from '../menu/menu.component';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MainPageComponent } from '../main-page/main-page.component';
import { LoginPageComponent } from '../login-page/login-page.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
  declarations: [AppComponent, MainPageComponent, MenuComponent, MainPageComponent, LoginPageComponent],
  imports: [
    FormsModule,
    CommonModule,
    BrowserModule, 
    AppRoutingModule, 
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    MatDialogModule,
    MatSnackBarModule,
    MatProgressSpinnerModule
  ],
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
