import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { AngularSvgIconModule as SvgIconModule } from 'angular-svg-icon'
import { SidebarComponent } from './sidebar.component'

@NgModule({
  imports: [CommonModule, SvgIconModule, RouterModule],
  declarations: [SidebarComponent],
  exports: [SidebarComponent]
})
export class SidebarModule {}
