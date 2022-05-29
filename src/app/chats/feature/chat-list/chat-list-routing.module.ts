import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ChatListPageComponent } from './chat-list.page'

const routes: Routes = [
  {
    path: '',
    component: ChatListPageComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class ChatListRoutingModule {}
