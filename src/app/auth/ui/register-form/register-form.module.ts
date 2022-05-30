import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { InputModule } from '@shared/ui/input/input.module'
import { RegisterFormComponent } from './register-form.component'

@NgModule({
  imports: [CommonModule, InputModule, ReactiveFormsModule],
  declarations: [RegisterFormComponent],
  exports: [RegisterFormComponent]
})
export class RegisterFormModule {}
