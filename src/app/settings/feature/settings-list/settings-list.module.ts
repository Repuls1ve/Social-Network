import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { SettingsListRoutingModule } from './settings-list-routing.module'
import { SettingsListPageComponent } from './settings-list.page'

@NgModule({
  imports: [CommonModule, SettingsListRoutingModule],
  declarations: [SettingsListPageComponent]
})
export class SettingsListModule {}
