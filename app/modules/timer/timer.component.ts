import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { TimerService } from '../../services/timer.service';
var helper = require('../../broadcast/helper/notification-helper')

@Component({
  selector: 'home',
  templateUrl: 'modules/timer/timer.component.html',
  styleUrls: ['modules/timer/timer.component.css'],
  providers: [TimerService],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class TimerComponent {

  constructor(public ts: TimerService) {

  }

  public onTap() {

    //ToDo get context and pass to function

    helper.setAlarmClock();    
  }
}
