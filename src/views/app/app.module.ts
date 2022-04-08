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
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MainPageComponent } from '../main-page/main-page.component';
import { LoginPageComponent } from '../login-page/login-page.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { DisciplinesPageComponent } from '../disciplines-page/disciplines-page.component';
import {MatTableModule} from '@angular/material/table';
import { DisciplineService } from 'src/services/disciplines.service';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { DisciplineEditDialogComponent } from '../discipline-edit-dialog/discipline-edit-dialog.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ClassesEditComponent } from '../classes-edit/classes-edit.component';
import { ClassesComponent } from '../classes/classes.component';
import { ClassesService } from 'src/services/classes.service';
import {MatChipsModule} from '@angular/material/chips';
import {MatSelectModule} from '@angular/material/select';
import { AuthPageComponent } from '../auth-page/auth-page.component';
import { OAuthModule } from 'angular-oauth2-oidc';

@NgModule({
  declarations: [
    AppComponent, 
    MainPageComponent,
    MainPageComponent,
    LoginPageComponent,
    DisciplinesPageComponent,
    DisciplineEditDialogComponent,
    ClassesComponent,
    ClassesEditComponent,
    AuthPageComponent
  ],
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
    MatProgressSpinnerModule,
    MatTableModule,
    MatCheckboxModule,
    NgbModule,
    MatChipsModule,
    MatSelectModule,
    ReactiveFormsModule,
    OAuthModule.forRoot()
  ],
  providers: [
    AppConfig,
    ApiRequestService,
    UserService,
    UserInfoService,
    LoginService,
    DisciplineService,
    ClassesService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
