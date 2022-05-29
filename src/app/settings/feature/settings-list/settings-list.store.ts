import { Injectable } from '@angular/core'
import { ComponentStore } from '@ngrx/component-store'

export interface SettingsListState {}

@Injectable()
export class SettingsListStore extends ComponentStore<SettingsListState> {
  constructor() {
    super({})
  }
}
