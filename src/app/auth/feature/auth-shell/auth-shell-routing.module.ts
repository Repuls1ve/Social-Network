import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

const routes: Routes = [
  {
    path: 'start',
    loadChildren: () => import('../auth-start/auth-start.module').then(m => m.AuthStartModule)
  },
  {
    path: 'login',
    loadChildren: () => import('../auth-login/auth-login.module').then(m => m.AuthLoginModule)
  },
  {
    path: 'register',
    loadChildren: () =>
      import('../auth-register/auth-register.module').then(m => m.AuthRegisterModule)
  },
  {
    path: '**',
    redirectTo: 'start'
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthShellRoutingModule {}
