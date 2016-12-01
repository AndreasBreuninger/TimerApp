import { NgModule } from '@angular/core';

import { NativeScriptModule } from 'nativescript-angular/platform';

import { AppComponent } from './app.component';
import { TimerComponent } from './timer/timer.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    TimerComponent
  ],
  imports: [
    NativeScriptModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
