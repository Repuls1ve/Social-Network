import { Injectable } from '@angular/core'
import { ComponentStore } from '@ngrx/component-store'
import { EMPTY_FUNCTION, EMPTY_STRING } from '@shared/constants/empty.constant'
import { InputType, InputTypeT } from '@shared/enums/input-type.enum'
import { map, Observable, tap } from 'rxjs'

export interface InputState {
  /**
   * Shows a cross to reset a value
   */
  readonly clearable: boolean

  /**
   * Text field is read only
   */
  readonly disabled: boolean

  /**
   * Shows a floating label inside text field
   */
  readonly floatingLabel: boolean

  /**
   * Type of the input
   */
  readonly inputType: InputTypeT

  /**
   * Current value of the input
   */
  readonly value: string

  /**
   * Callback function that is called when the control's value changes in the UI
   */
  readonly onChange: (value: InputState['value']) => void

  /**
   * Callback function that is called by the forms API on initialization to update the form model on blur
   */
  readonly onTouched: () => void
}

@Injectable()
export class InputStore extends ComponentStore<InputState> {
  constructor() {
    super({
      clearable: false,
      disabled: false,
      floatingLabel: true,
      inputType: InputType.Text,
      value: EMPTY_STRING,
      onChange: EMPTY_FUNCTION,
      onTouched: EMPTY_FUNCTION
    })
  }

  public readonly setClearable = this.updater((state, value: InputState['clearable']) => ({
    ...state,
    clearable: value
  }))

  public readonly setDisabled = this.updater((state, value: InputState['disabled']) => ({
    ...state,
    disabled: value
  }))

  public readonly setFloatingLabel = this.updater((state, value: InputState['floatingLabel']) => ({
    ...state,
    floatingLabel: value
  }))

  public readonly setInputType = this.updater((state, value: InputState['inputType']) => ({
    ...state,
    inputType: value
  }))

  public readonly setValue = this.updater((state, value: InputState['value']) => ({
    ...state,
    value: value
  }))

  public readonly registerOnChange = this.updater((state, value: InputState['onChange']) => ({
    ...state,
    onChange: value
  }))

  public readonly registerOnTouched = this.updater((state, value: InputState['onTouched']) => ({
    ...state,
    onTouched: value
  }))

  public readonly hasValue$ = this.select(state => Boolean(state.value))

  public readonly vm$ = this.select(this.hasValue$, this.state$, (hasValue, state) => ({
    hasValue,
    ...state
  }))

  public readonly writeValue = this.effect((value$: Observable<InputState['value']>) =>
    value$.pipe(tap(value => this.setValue(value)))
  )

  public readonly onChange = this.effect((value$: Observable<InputState['value']>) =>
    value$.pipe(tap(value => this.get().onChange(value)))
  )

  public readonly onTouched = this.effect(source$ =>
    source$.pipe(tap(() => this.get().onTouched()))
  )

  public readonly onInput = this.effect((input$: Observable<HTMLInputElement>) =>
    input$.pipe(
      map(input => input.value),
      tap(value => this.setValue(value)),
      tap(value => this.onChange(value))
    )
  )

  public readonly onClear = this.effect((input$: Observable<HTMLInputElement>) =>
    input$.pipe(
      tap(() => this.setValue(EMPTY_STRING)),
      tap(() => this.onChange(EMPTY_STRING)),
      tap(input => input.focus())
    )
  )

  public readonly onTouch = this.effect(source$ => source$.pipe(tap(() => this.onTouched())))
}
