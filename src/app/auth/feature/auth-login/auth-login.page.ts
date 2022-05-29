import { ChangeDetectionStrategy, Component } from '@angular/core'
import { AuthLoginStore } from './auth-login.store'

@Component({
  selector: 'app-auth-login-page',
  templateUrl: './auth-login.page.html',
  styleUrls: ['./auth-login.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [AuthLoginStore]
})
export class AuthLoginPageComponent {}
