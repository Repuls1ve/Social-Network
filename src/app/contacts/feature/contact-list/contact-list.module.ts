import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { ContactListRoutingModule } from './contact-list-routing.module'
import { ContactListPageComponent } from './contact-list.page'

@NgModule({
  imports: [CommonModule, ContactListRoutingModule],
  declarations: [ContactListPageComponent]
})
export class ContactListModule {}
