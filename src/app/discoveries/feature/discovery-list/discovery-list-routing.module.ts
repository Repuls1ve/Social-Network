import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { DiscoveryListPageComponent } from './discovery-list.page'

const routes: Routes = [
  {
    path: '',
    component: DiscoveryListPageComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DiscoveryListRoutingModule {}
