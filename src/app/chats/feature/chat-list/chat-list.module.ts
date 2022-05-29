import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { InputModule } from '@shared/ui/input/input.module'
import { ChatListRoutingModule } from './chat-list-routing.module'
import { ChatListPageComponent } from './chat-list.page'

@NgModule({
  imports: [CommonModule, InputModule, ReactiveFormsModule, ChatListRoutingModule],
  declarations: [ChatListPageComponent]
})
export class ChatListModule {}
