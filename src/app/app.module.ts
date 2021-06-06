import { BrowserModule } from '@angular/platform-browser';
import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { AppComponent } from './app.component';
import { ChartsComponent } from './charts/charts.component';

import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    ChartsComponent
  ],
  imports: [
    BrowserModule,
    ChartsModule
  ],
  providers: [],
  entryComponents: [
    ChartsComponent
  ]
})
export class AppModule {

  constructor (private injector: Injector) {}

  ngDoBootstrap () {
    const el = createCustomElement(ChartsComponent, {injector : this.injector});
    customElements.define('fy-charts', el);
  }
}
