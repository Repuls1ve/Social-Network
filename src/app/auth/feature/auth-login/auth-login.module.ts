import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { LoginFormModule } from '@app/auth/ui/login-form/login-form.module'
import { ButtonModule } from '@shared/ui/button/button.module'
import { AuthLoginRoutingModule } from './auth-login-routing.module'
import { AuthLoginPageComponent } from './auth-login.page'

@NgModule({
  imports: [
    CommonModule,
    ButtonModule,
    LoginFormModule,
    ReactiveFormsModule,
    AuthLoginRoutingModule
  ],
  declarations: [AuthLoginPageComponent]
})
export class AuthLoginModule {}
