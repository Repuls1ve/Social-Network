import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { AuthRegisterRoutingModule } from './auth-register-routing.module'
import { AuthRegisterPageComponent } from './auth-register.page'

@NgModule({
  imports: [CommonModule, AuthRegisterRoutingModule],
  declarations: [AuthRegisterPageComponent]
})
export class AuthRegisterModule {}
