import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { LoginPageComponent } from './../login-page/login-page.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent, LoginPageComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent, LoginPageComponent],
})
export class AppModule {}
