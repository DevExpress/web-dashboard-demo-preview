import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DxDashboardControlModule } from 'devexpress-dashboard-angular';
import { DxButtonModule } from 'devextreme-angular/ui/button'
import { DxSelectBoxModule } from 'devextreme-angular/ui/select-box'

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    DxDashboardControlModule,
    DxButtonModule,
    DxSelectBoxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }