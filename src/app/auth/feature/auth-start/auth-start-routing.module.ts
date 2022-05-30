import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AuthStartPageComponent } from './auth-start.page'

const routes: Routes = [
  {
    path: '',
    component: AuthStartPageComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthStartRoutingModule {}
