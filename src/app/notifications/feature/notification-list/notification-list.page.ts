import { ChangeDetectionStrategy, Component } from '@angular/core'
import { NotificationListStore } from './notification-list.store'

@Component({
  selector: 'app-notification-list-page',
  templateUrl: './notification-list.page.html',
  styleUrls: ['./notification-list.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [NotificationListStore]
})
export class NotificationListPageComponent {}
