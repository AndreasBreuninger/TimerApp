import { NgModule } from '@angular/core';
// import { FormsModule }   from '@angular/forms';

import { NativeScriptModule } from 'nativescript-angular/platform';
import { NativeScriptFormsModule } from 'nativescript-angular/forms';

import { AppComponent } from './app.component';
import { TimerComponent } from './timer/timer.component';
import { AppRoutingModule } from './app-routing.module';
import { ActivationComponent } from './activation/activation.component'
import { SqliteService } from '../services/sqlite.service'


@NgModule({
  declarations: [
    AppComponent,
    TimerComponent,
    ActivationComponent
  ],
  imports: [
    NativeScriptModule,
    AppRoutingModule,
    NativeScriptFormsModule,
    // FormsModule
  ],
  providers: [
    SqliteService,
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
