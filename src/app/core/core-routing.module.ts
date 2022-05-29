import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { BaseLayoutComponent } from '@shared/ui/layouts/base/base-layout.component'
import { BaseLayoutModule } from '@shared/ui/layouts/base/base-layout.module'
import { EmptyLayoutComponent } from '@shared/ui/layouts/empty/empty-layout.component'
import { EmptyLayoutModule } from '@shared/ui/layouts/empty/empty-layout.module'

const routes: Routes = [
  {
    path: '',
    component: BaseLayoutComponent,
    children: [
      {
        path: 'chats',
        loadChildren: () =>
          import('../chats/feature/chat-shell/chat-shell.module').then(m => m.ChatShellModule)
      }
    ]
  },
  {
    path: '',
    component: EmptyLayoutComponent,
    children: [
      {
        path: 'auth',
        loadChildren: () =>
          import('../auth/feature/auth-shell/auth-shell.module').then(m => m.AuthShellModule)
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'chats'
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes), EmptyLayoutModule, BaseLayoutModule],
  exports: [RouterModule]
})
export class CoreRoutingModule {}
