import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { TimerService } from '../../services/timer.service';
var helper = require('../../broadcast/helper/notification-helper');
var utils = require("utils/utils");

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
    console.log("onTap");
    var ctx = utils.ad.getApplicationContext();

    console.log("got ctx");

    helper.setAlarmClock(ctx);

  }
}
