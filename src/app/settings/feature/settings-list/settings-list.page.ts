import { Component } from '@angular/core'
import { SettingsListStore } from './settings-list.store'

@Component({
  selector: 'app-settings-list-page',
  templateUrl: './settings-list.page.html',
  styleUrls: ['./settings-list.page.scss'],
  providers: [SettingsListStore]
})
export class SettingsListPageComponent {}
