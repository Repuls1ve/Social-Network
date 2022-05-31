import { ChangeDetectionStrategy, Component } from '@angular/core'

@Component({
  selector: 'nav[appSidebar], aside[appSidebar]',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarComponent {}
