import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { NotificationListRoutingModule } from './notification-list-routing.module'
import { NotificationListPageComponent } from './notification-list.page'

@NgModule({
  imports: [CommonModule, NotificationListRoutingModule],
  declarations: [NotificationListPageComponent]
})
export class NotificationListModule {}
