import { NgModule } from '@angular/core';

import { NativeScriptRouterModule } from 'nativescript-angular/router';

import { TimerComponent } from './timer/timer.component';

@NgModule({
  imports: [
    NativeScriptRouterModule.forRoot([
      { path: '', pathMatch: 'full', component: TimerComponent },
      // { path: '/launch', pathMatch: 'full', component: TimerComponent },
      
    ])
  ],
  exports: [NativeScriptRouterModule]
})
export class AppRoutingModule {

}
