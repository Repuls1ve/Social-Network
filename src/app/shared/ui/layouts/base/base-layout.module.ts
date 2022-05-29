import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { SidebarModule } from '@shared/ui/sidebar/sidebar.module'
import { BaseLayoutComponent } from './base-layout.component'

@NgModule({
  imports: [CommonModule, SidebarModule, RouterModule],
  declarations: [BaseLayoutComponent],
  exports: [BaseLayoutComponent]
})
export class BaseLayoutModule {}
