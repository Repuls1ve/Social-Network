import { NgModule } from '@angular/core'
import { CoreModule } from '@core/core.module'
import { MainComponent } from './main.component'

@NgModule({
  imports: [CoreModule],
  declarations: [MainComponent],
  bootstrap: [MainComponent]
})
export class MainModule {}
