import { ChangeDetectionStrategy, Component } from '@angular/core'

@Component({
  selector: '[appSidebarHeader]',
  templateUrl: './sidebar-header.component.html',
  styleUrls: ['./sidebar-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarHeaderComponent {}
