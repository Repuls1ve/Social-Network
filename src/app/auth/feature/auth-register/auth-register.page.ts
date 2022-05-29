import { ChangeDetectionStrategy, Component } from '@angular/core'
import { AuthRegisterStore } from './auth-register.store'

@Component({
  selector: 'app-auth-register-page',
  templateUrl: './auth-register.page.html',
  styleUrls: ['./auth-register.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [AuthRegisterStore]
})
export class AuthRegisterPageComponent {}
