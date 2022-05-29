import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { SettingsListPageComponent } from './settings-list.page'

const routes: Routes = [
  {
    path: '',
    component: SettingsListPageComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsListRoutingModule {}
