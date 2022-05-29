import { ChangeDetectionStrategy, Component } from '@angular/core'
import { DiscoveryListStore } from './discovery-list.store'

@Component({
  selector: 'app-discovery-list-page',
  templateUrl: './discovery-list.page.html',
  styleUrls: ['./discovery-list.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [DiscoveryListStore]
})
export class DiscoveryListPageComponent {}
