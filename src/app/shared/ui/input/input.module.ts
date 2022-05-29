import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { AngularSvgIconModule as SvgIconModule } from 'angular-svg-icon'
import { InputComponent } from './input.component'

@NgModule({
  imports: [CommonModule, SvgIconModule],
  declarations: [InputComponent],
  exports: [InputComponent]
})
export class InputModule {}
