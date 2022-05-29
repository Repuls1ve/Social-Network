import { Injectable } from '@angular/core'
import { ComponentStore } from '@ngrx/component-store'

export interface DiscoveryListState {}

@Injectable()
export class DiscoveryListStore extends ComponentStore<DiscoveryListState> {
  constructor() {
    super({})
  }
}
