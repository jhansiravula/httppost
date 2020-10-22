import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommitsapiComponent } from './commitsapi/commitsapi.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo:'/login'
  },
  {
    path:'commitsapi',
    component:CommitsapiComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
