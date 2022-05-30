import { ChangeDetectionStrategy, Component, Input } from '@angular/core'
import { ControlValueAccessor } from '@angular/forms'
import { INPUT_PROVIDERS } from './input.providers'
import { InputState, InputStore } from './input.store'

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [INPUT_PROVIDERS]
})
export class InputComponent implements ControlValueAccessor {
  public readonly vm$ = this.inputStore.vm$

  @Input()
  public set clearable(value: InputState['clearable']) {
    this.inputStore.setClearable(value)
  }

  @Input()
  public set floatingLabel(value: InputState['floatingLabel']) {
    this.inputStore.setFloatingLabel(value)
  }

  @Input('type')
  public set inputType(value: InputState['inputType']) {
    this.inputStore.setInputType(value)
  }

  constructor(private readonly inputStore: InputStore) {}

  public registerOnChange(onChange: InputState['onChange']): void {
    this.inputStore.registerOnChange(onChange)
  }

  public registerOnTouched(onTouched: InputState['onTouched']): void {
    this.inputStore.registerOnTouched(onTouched)
  }

  public writeValue(value: InputState['value']): void {
    this.inputStore.writeValue(value)
  }

  public setDisabledState(disabled: InputState['disabled']): void {
    this.inputStore.setDisabled(disabled)
  }

  public onInput(input: HTMLInputElement): void {
    this.inputStore.onInput(input)
  }

  public onClear(input: HTMLInputElement): void {
    this.inputStore.onClear(input)
  }

  public onTouch(): void {
    this.inputStore.onTouch()
  }
}
