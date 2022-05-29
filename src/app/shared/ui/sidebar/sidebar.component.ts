import { ChangeDetectionStrategy, Component } from '@angular/core'

export const SIDEBAR_TABS = [
  {
    link: 'discover',
    default: '/assets/svg/discover.svg',
    active: '/assets/svg/discover-active.svg'
  },
  {
    link: 'contacts',
    default: '/assets/svg/contacts.svg',
    active: '/assets/svg/contacts-active.svg'
  },
  {
    link: 'chats',
    default: '/assets/svg/chat.svg',
    active: '/assets/svg/chat-active.svg'
  },
  {
    link: 'notifications',
    default: '/assets/svg/notifications.svg',
    active: '/assets/svg/notifications-active.svg'
  },
  {
    link: 'settings',
    default: '/assets/svg/settings.svg',
    active: '/assets/svg/settings-active.svg'
  }
]

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarComponent {
  public readonly tabs = SIDEBAR_TABS
}
