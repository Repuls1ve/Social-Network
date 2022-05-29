import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { EmptyLayoutComponent } from './empty-layout.component'

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [EmptyLayoutComponent],
  exports: [EmptyLayoutComponent]
})
export class EmptyLayoutModule {}
