import { Injectable } from '@angular/core'
import { ComponentStore } from '@ngrx/component-store'

export interface ContactListState {}

@Injectable()
export class ContactListStore extends ComponentStore<ContactListState> {
  constructor() {
    super({})
  }
}
