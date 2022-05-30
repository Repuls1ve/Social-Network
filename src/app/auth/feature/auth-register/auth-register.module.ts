import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { RegisterFormModule } from '@app/auth/ui/register-form/register-form.module'
import { ButtonModule } from '@shared/ui/button/button.module'
import { AuthRegisterRoutingModule } from './auth-register-routing.module'
import { AuthRegisterPageComponent } from './auth-register.page'

@NgModule({
  imports: [
    CommonModule,
    ButtonModule,
    RegisterFormModule,
    ReactiveFormsModule,
    AuthRegisterRoutingModule
  ],
  declarations: [AuthRegisterPageComponent]
})
export class AuthRegisterModule {}
