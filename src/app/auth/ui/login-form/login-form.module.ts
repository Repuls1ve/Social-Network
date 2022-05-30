import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { InputModule } from '@shared/ui/input/input.module'
import { LoginFormComponent } from './login-form.component'

@NgModule({
  imports: [CommonModule, InputModule, ReactiveFormsModule],
  declarations: [LoginFormComponent],
  exports: [LoginFormComponent]
})
export class LoginFormModule {}
