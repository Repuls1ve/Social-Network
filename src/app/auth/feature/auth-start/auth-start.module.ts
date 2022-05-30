import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { ButtonModule } from '@shared/ui/button/button.module'
import { AngularSvgIconModule as SvgIconModule } from 'angular-svg-icon'
import { AuthStartRoutingModule } from './auth-start-routing.module'
import { AuthStartPageComponent } from './auth-start.page'

@NgModule({
  imports: [CommonModule, ButtonModule, SvgIconModule, AuthStartRoutingModule],
  declarations: [AuthStartPageComponent]
})
export class AuthStartModule {}
