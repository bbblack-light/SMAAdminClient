import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './../login-page/login-page.component';

const routes: Routes = [
  { path: 'login', component: LoginPageComponent },
];
// todo: check why routes not working
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
