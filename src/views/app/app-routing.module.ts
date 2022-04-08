import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './../login-page/login-page.component';
import { MainPageComponent } from '../main-page/main-page.component';
import { DisciplinesPageComponent } from '../disciplines-page/disciplines-page.component';
import { ClassesEditComponent } from '../classes-edit/classes-edit.component';
import { ClassesComponent } from '../classes/classes.component';
import { AuthPageComponent } from '../auth-page/auth-page.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'disciplines', component: DisciplinesPageComponent },
  { path: 'classes', component: ClassesComponent },
  { path: 'classes/:id', component: ClassesEditComponent },
  { path: 'auth', component: AuthPageComponent }
];
// todo: check why routes not working
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
