import { ChangeDetectionStrategy, Component } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import {
  EMAIL_PATTERN,
  PASSWORD_PATTERN,
  USERNAME_PATTERN
} from '@shared/constants/pattern.constant'
import { ReusableForm } from '@shared/interfaces/reusable-form.interface'

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterFormComponent implements ReusableForm {
  public readonly registerForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.pattern(EMAIL_PATTERN)]],
    username: ['', [Validators.required, Validators.pattern(USERNAME_PATTERN)]],
    password: ['', [Validators.required, Validators.pattern(PASSWORD_PATTERN)]]
  })

  constructor(private readonly formBuilder: FormBuilder) {}

  public createFormGroup(): FormGroup {
    return this.registerForm
  }
}
