import { forwardRef, Provider } from '@angular/core'
import { NG_VALUE_ACCESSOR } from '@angular/forms'
import { InputComponent } from './input.component'
import { InputStore } from './input.store'

export const INPUT_PROVIDERS: Provider[] = [
  InputStore,
  {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => InputComponent),
    multi: true
  }
]
