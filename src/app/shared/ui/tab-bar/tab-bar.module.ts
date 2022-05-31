import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { AngularSvgIconModule as SvgIconModule } from 'angular-svg-icon'
import { TabBarComponent } from './tab-bar.component'

@NgModule({
  imports: [CommonModule, SvgIconModule, RouterModule],
  declarations: [TabBarComponent],
  exports: [TabBarComponent]
})
export class TabBarModule {}
