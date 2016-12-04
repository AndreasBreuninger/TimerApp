import { NgModule } from '@angular/core';
// import { FormsModule }   from '@angular/forms';

import { NativeScriptModule } from 'nativescript-angular/platform';
import { NativeScriptFormsModule } from 'nativescript-angular/forms';

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
    AppRoutingModule,
    NativeScriptFormsModule,
    // FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
