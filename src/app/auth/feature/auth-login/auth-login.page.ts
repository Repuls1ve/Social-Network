import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core'
import { FormGroup } from '@angular/forms'
import { LoginFormComponent } from '@app/auth/ui/login-form/login-form.component'
import { AuthLoginStore } from './auth-login.store'

@Component({
  selector: 'app-auth-login-page',
  templateUrl: './auth-login.page.html',
  styleUrls: ['./auth-login.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [AuthLoginStore]
})
export class AuthLoginPageComponent implements OnInit {
  @ViewChild(LoginFormComponent, { static: true })
  public loginFormComponent!: LoginFormComponent

  public loginForm!: FormGroup

  public ngOnInit(): void {
    this.loginForm = this.loginFormComponent.createFormGroup()
  }
}
