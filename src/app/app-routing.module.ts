import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { NormalDashboardComponent } from './pages/normal-dashboard/normal-dashboard.component';
import { SignupComponent } from './pages/signup/signup.component';
import { AdminGuard } from './services/guards/admin.guard';
import { NormalGuard } from './services/guards/normal.guard';

const routes: Routes = [
  {
    path:'login',
    component: LoginComponent,
    pathMatch:'full',

  },
  {
    path:'signup',
    component:SignupComponent,
    pathMatch:'full',
  },
  {
    path:'',
    component:HomeComponent,
    pathMatch:'full'
  },
  {
    path:'normal-dashboard',
    component:NormalDashboardComponent,
    pathMatch:'full',
    canActivate:[NormalGuard]
  },
  {
    path:'admin-dashboard',
    component:AdminDashboardComponent,
    pathMatch:'full',
    canActivate:[AdminGuard]

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
