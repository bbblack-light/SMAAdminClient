import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './../login-page/login-page.component';

const routes: Routes = [
  {
    path: 'first-component',
    component: AppComponent,
  },
  { path: 'login', component: LoginPageComponent },
];
todo: check why routes not working
@NgModule({
  imports: [RouterModule.forRoutes(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
