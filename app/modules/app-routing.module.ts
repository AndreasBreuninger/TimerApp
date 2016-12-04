import { NgModule } from '@angular/core';

import { NativeScriptRouterModule } from 'nativescript-angular/router';

import { TimerComponent } from './timer/timer.component';
import { ActivationComponent } from './activation/activation.component'

@NgModule({
  imports: [
    NativeScriptRouterModule.forRoot([
      { path: '', pathMatch: 'full', component: TimerComponent },
      { path: 'launch', pathMatch: 'full', component: ActivationComponent },
      
    ])
  ],
  exports: [NativeScriptRouterModule]
})
export class AppRoutingModule {

}
