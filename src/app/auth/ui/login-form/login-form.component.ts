import { ChangeDetectionStrategy, Component } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { EMAIL_PATTERN, PASSWORD_PATTERN } from '@shared/constants/pattern.constant'
import { ReusableForm } from '@shared/interfaces/reusable-form.interface'

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginFormComponent implements ReusableForm {
  public readonly loginForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.pattern(EMAIL_PATTERN)]],
    password: ['', [Validators.required, Validators.pattern(PASSWORD_PATTERN)]]
  })

  constructor(private readonly formBuilder: FormBuilder) {}

  public createFormGroup(): FormGroup {
    return this.loginForm
  }
}
