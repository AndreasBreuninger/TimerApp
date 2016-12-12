import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { TimerService } from '../../services/timer.service';
import { SettingsService } from '../../services/settings.service';
import { RouterExtensions } from 'nativescript-angular';
var NotificationModelBase = require('../../models/NotificationModelBase');

var helper = require('../../broadcast/helper/notification-helper');
var utils = require("utils/utils");
import { NativeScriptFormsModule } from "nativescript-angular/forms";

@Component({
  selector: 'home',
  templateUrl: 'modules/timer/timer.component.html',
  styleUrls: ['modules/timer/timer.component.css'],
  providers: [TimerService, SettingsService],
})

export class TimerComponent {


  constructor(public ts: TimerService, public settings: SettingsService, private routerExtensions: RouterExtensions) {

  }


  public onTap(interval: number, msg: string) {

    var notification: NotificationModelBase;
    notification = NotificationModelBase.createModel("Title", "Text", 1);

    var ctx = utils.ad.getApplicationContext();
    helper.setAlarmClock(ctx, notification);

    this.ts.insertAlert(notification);
  }
}
