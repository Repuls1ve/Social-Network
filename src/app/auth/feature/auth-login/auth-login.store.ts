import { Injectable } from '@angular/core'
import { ComponentStore } from '@ngrx/component-store'

export interface AuthLoginState {}

@Injectable()
export class AuthLoginStore extends ComponentStore<AuthLoginState> {
  constructor() {
    super({})
  }
}
