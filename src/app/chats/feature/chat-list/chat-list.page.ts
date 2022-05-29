import { ChangeDetectionStrategy, Component } from '@angular/core'
import { ChatListStore } from './chat-list.store'

@Component({
  selector: 'app-chat-list-page',
  templateUrl: './chat-list.page.html',
  styleUrls: ['./chat-list.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ChatListStore]
})
export class ChatListPageComponent {}
