import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { AddCategoriesComponent } from './pages/admin/add-categories/add-categories.component';
import { AddQuestionComponent } from './pages/admin/add-question/add-question.component';
import { AddQuizesComponent } from './pages/admin/add-quizes/add-quizes.component';
import { AdminwelcomeComponent } from './pages/admin/adminwelcome/adminwelcome.component';
import { UpdateQuizComponent } from './pages/admin/update-quiz/update-quiz.component';
import { ViewCategoriesComponent } from './pages/admin/view-categories/view-categories.component';
import { ViewQuizQuestionComponent } from './pages/admin/view-quiz-question/view-quiz-question.component';
import { ViewQuizzesComponent } from './pages/admin/view-quizzes/view-quizzes.component';
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
    canActivate:[NormalGuard],
    children:[
      {
        path:'profile',
        component:ProfileComponent
      }
    ]
  },
  {
    path:'admin-dashboard',
    component:AdminDashboardComponent,
    canActivate:[AdminGuard],
    children:[
      {
        path:'',
        component:AdminwelcomeComponent
      },
      {
        path:'profile',
        component:ProfileComponent
      },
      {
        path:'categories',
        component:ViewCategoriesComponent
      },
      {
        path:'add_category',
        component:AddCategoriesComponent
      },
      {
        path:'quizzes',
        component:ViewQuizzesComponent
      },
      {
        path:'add_quiz',
        component:AddQuizesComponent
      },
      {
        path:'update-quiz/:id',
        component:UpdateQuizComponent
      },
      {
        path:'view-quiz-question/:id/:title',
        component:ViewQuizQuestionComponent
      },
      {
        path:'add-quiz-question/:quizId/:quizTitle',
        component:AddQuestionComponent
      }
    ]

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
