import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ContactListPageComponent } from './contact-list.page'

const routes: Routes = [
  {
    path: '',
    component: ContactListPageComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactListRoutingModule {}
