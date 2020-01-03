import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: '', redirectTo: 'startscreen', pathMatch: 'full' 
  },
  { 
    path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registration',
    loadChildren: () => import('./registration/registration.module').then( m => m.RegistrationPageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
  {
    path: 'homepage',
    loadChildren: () => import('./homepage/homepage.module').then( m => m.HomepagePageModule)
  },
  {
    path: 'startscreen',
    loadChildren: () => import('./startscreen/startscreen.module').then( m => m.StartscreenPageModule)
  },
  {
    path: 'startscreen',
    loadChildren: () => import('./startscreen/startscreen.module').then( m => m.StartscreenPageModule)
  },
  {
    path: 'student',
    loadChildren: () => import('./student/student.module').then( m => m.StudentPageModule)
  },
  {
    path: 'calander',
    loadChildren: () => import('./calander/calander.module').then( m => m.CalanderPageModule)
  },
  {
    path: 'dailyclassreport',
    loadChildren: () => import('./dailyclassreport/dailyclassreport.module').then( m => m.DailyclassreportPageModule)
  },
  {
    path: 'application',
    loadChildren: () => import('./application/application.module').then( m => m.ApplicationPageModule)
  },
  {
    path: 'daily-class-report',
    loadChildren: () => import('./daily-class-report/daily-class-report.module').then( m => m.DailyClassReportPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
