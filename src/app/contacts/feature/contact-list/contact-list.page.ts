import { ChangeDetectionStrategy, Component } from '@angular/core'
import { ContactListStore } from './contact-list.store'

@Component({
  selector: 'app-contact-list-page',
  templateUrl: './contact-list.page.html',
  styleUrls: ['./contact-list.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ContactListStore]
})
export class ContactListPageComponent {}
