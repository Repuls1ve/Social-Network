import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { DiscoveryListRoutingModule } from './discovery-list-routing.module'
import { DiscoveryListPageComponent } from './discovery-list.page'

@NgModule({
  imports: [CommonModule, DiscoveryListRoutingModule],
  declarations: [DiscoveryListPageComponent]
})
export class DiscoveryListModule {}
