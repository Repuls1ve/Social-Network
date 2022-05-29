import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AngularSvgIconModule as SvgIconModule } from 'angular-svg-icon'
import { CoreRoutingModule } from './core-routing.module'

@NgModule({
  imports: [CoreRoutingModule, SvgIconModule.forRoot()],
  exports: [BrowserModule, BrowserAnimationsModule, HttpClientModule, CoreRoutingModule]
})
export class CoreModule {}
