import { Injectable } from '@angular/core'
import { ComponentStore } from '@ngrx/component-store'

export interface NotificationListState {}

@Injectable()
export class NotificationListStore extends ComponentStore<NotificationListState> {
  constructor() {
    super({})
  }
}
