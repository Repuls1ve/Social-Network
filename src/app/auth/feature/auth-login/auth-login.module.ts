import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { AuthLoginRoutingModule } from './auth-login-routing.module'
import { AuthLoginPageComponent } from './auth-login.page'

@NgModule({
  imports: [CommonModule, AuthLoginRoutingModule],
  declarations: [AuthLoginPageComponent]
})
export class AuthLoginModule {}
