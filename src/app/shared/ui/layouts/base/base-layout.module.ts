import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { TabBarModule } from '@shared/ui/tab-bar/tab-bar.module'
import { BaseLayoutComponent } from './base-layout.component'

@NgModule({
  imports: [CommonModule, TabBarModule, RouterModule],
  declarations: [BaseLayoutComponent],
  exports: [BaseLayoutComponent]
})
export class BaseLayoutModule {}
