import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeshboardComponent } from './components/deshboard/deshboard.component';
import { LoginComponent } from './components/login/login.component';
import { IfUserLogin } from './services/gate.service';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'deshboard', component: DeshboardComponent, canActivate: [IfUserLogin]},
  {path: 'login', component: LoginComponent},
];
// ,canActivate: [IfCanOpenLogin]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
