import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { AuthGuard } from './guard/auth.guard';
import { ListViewComponent } from './list-view/list-view.component';


const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: (sessionStorage.getItem('isHCP') !== 'true') ? '/hub/dashboard' : '/hcp/dashboard',
  //   pathMatch: 'full',
  // },
  {
    path: '',
    component: SigninComponent,
    pathMatch: 'full'
  },
  {
    path: 'signin',
    component: SigninComponent
  },
  {
    path: 'view',
    component: ListViewComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    redirectTo: ''
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
