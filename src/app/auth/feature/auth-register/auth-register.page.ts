import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core'
import { FormGroup } from '@angular/forms'
import { RegisterFormComponent } from '@app/auth/ui/register-form/register-form.component'
import { AuthRegisterStore } from './auth-register.store'

@Component({
  selector: 'app-auth-register-page',
  templateUrl: './auth-register.page.html',
  styleUrls: ['./auth-register.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [AuthRegisterStore]
})
export class AuthRegisterPageComponent implements OnInit {
  @ViewChild(RegisterFormComponent, { static: true })
  public registerFormComponent!: RegisterFormComponent

  public registerForm!: FormGroup

  public ngOnInit(): void {
    this.registerForm = this.registerFormComponent.createFormGroup()
  }
}
