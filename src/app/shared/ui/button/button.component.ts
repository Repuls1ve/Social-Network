import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core'
import { ButtonAppearance, ButtonAppearanceT } from '@shared/enums/button-appearance.enum'
import { ButtonSize, ButtonSizeT } from '@shared/enums/button-size.enum'

@Component({
  selector: 'button[appButton], a[appButton]',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent {
  @Input()
  public appearance: ButtonAppearanceT = ButtonAppearance.Primary

  @Input()
  public size: ButtonSizeT = ButtonSize.Medium

  @Input()
  public showLoader = false

  @HostBinding('class')
  public get classes(): string {
    return `${this.appearance} ${this.size} ${this.showLoader ? 'show-loader' : 'no-loader'}`
  }
}
