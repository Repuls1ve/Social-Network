import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { AngularSvgIconModule as SvgIconModule } from 'angular-svg-icon'
import { SidebarHeaderComponent } from './sidebar-header/sidebar-header.component'
import { SidebarItemComponent } from './sidebar-item/sidebar-item.component'
import { SidebarComponent } from './sidebar.component'

@NgModule({
  imports: [CommonModule, SvgIconModule],
  declarations: [SidebarComponent, SidebarItemComponent, SidebarHeaderComponent],
  exports: [SidebarComponent, SidebarItemComponent, SidebarHeaderComponent]
})
export class SidebarModule {}
