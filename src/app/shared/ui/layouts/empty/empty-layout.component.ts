import { ChangeDetectionStrategy, Component } from '@angular/core'

@Component({
  selector: 'app-empty-layout',
  templateUrl: './empty-layout.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmptyLayoutComponent {}
