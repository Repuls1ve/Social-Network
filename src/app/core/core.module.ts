import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { CoreRoutingModule } from './core-routing.module'

@NgModule({
  imports: [CoreRoutingModule],
  exports: [BrowserModule, BrowserAnimationsModule, HttpClientModule, CoreRoutingModule]
})
export class CoreModule {}
