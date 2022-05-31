import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Inject,
  Input,
  Optional
} from '@angular/core'
import { RouterLinkActive } from '@angular/router'
import { EMPTY_STRING } from '@shared/constants/empty.constant'

@Component({
  selector: 'a[appSidebarItem], button[appSidebarItem]',
  templateUrl: './sidebar-item.component.html',
  styleUrls: ['./sidebar-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarItemComponent {
  @Input()
  public active = false

  @Input()
  public icon = EMPTY_STRING

  constructor(
    @Optional()
    @Inject(RouterLinkActive)
    private readonly routerLinkActive: RouterLinkActive | null
  ) {}

  @HostBinding('class')
  public get classes(): string {
    return this.routerLinkActive?.isActive || this.active ? 'sidebar-item-active' : EMPTY_STRING
  }
}
