import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AuthRegisterPageComponent } from './auth-register.page'

const routes: Routes = [
  {
    path: '',
    component: AuthRegisterPageComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRegisterRoutingModule {}
