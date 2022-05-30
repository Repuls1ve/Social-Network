import { FormGroup } from '@angular/forms'

export interface ReusableForm {
  createFormGroup(): FormGroup
}
