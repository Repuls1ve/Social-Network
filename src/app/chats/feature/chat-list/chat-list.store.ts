import { Injectable } from '@angular/core'
import { ComponentStore } from '@ngrx/component-store'

export interface ChatListState {}

@Injectable()
export class ChatListStore extends ComponentStore<ChatListState> {
  constructor() {
    super({})
  }
}
