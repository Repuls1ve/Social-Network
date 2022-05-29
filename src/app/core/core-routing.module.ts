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
        path: 'discover',
        loadChildren: () =>
          import('../discoveries/feature/discovery-shell/discovery-shell.module').then(
            m => m.DiscoveryShellModule
          )
      },
      {
        path: 'contacts',
        loadChildren: () =>
          import('../contacts/feature/contact-shell/contact-shell.module').then(
            m => m.ContactShellModule
          )
      },
      {
        path: 'chats',
        loadChildren: () =>
          import('../chats/feature/chat-shell/chat-shell.module').then(m => m.ChatShellModule)
      },
      {
        path: 'notifications',
        loadChildren: () =>
          import('../notifications/feature/notification-shell/notification-shell.module').then(
            m => m.NotificationShellModule
          )
      },
      {
        path: 'settings',
        loadChildren: () =>
          import('../settings/feature/settings-shell/settings-shell.module').then(
            m => m.SettingsShellModule
          )
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
