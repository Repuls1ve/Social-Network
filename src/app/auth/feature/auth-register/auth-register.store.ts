import { Injectable } from '@angular/core'
import { ComponentStore } from '@ngrx/component-store'

export interface AuthRegisterState {}

@Injectable()
export class AuthRegisterStore extends ComponentStore<AuthRegisterState> {
  constructor() {
    super({})
  }
}
