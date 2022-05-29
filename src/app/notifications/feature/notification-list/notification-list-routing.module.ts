import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { NotificationListPageComponent } from './notification-list.page'

const routes: Routes = [
  {
    path: '',
    component: NotificationListPageComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotificationListRoutingModule {}
