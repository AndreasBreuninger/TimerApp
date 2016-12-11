import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { TimerService } from '../../services/timer.service';
import { SettingsService } from '../../services/settings.service';
import { SqliteService } from '../../services/sqlite.service';
import { RouterExtensions } from 'nativescript-angular';
var NotificationModelBase = require('../../models/NotificationModelBase');

var helper = require('../../broadcast/helper/notification-helper');
var utils = require("utils/utils");
import { NativeScriptFormsModule } from "nativescript-angular/forms";

@Component({
  selector: 'home',
  templateUrl: 'modules/timer/timer.component.html',
  styleUrls: ['modules/timer/timer.component.css'],
  providers: [TimerService, SettingsService, SqliteService],
})

export class TimerComponent {

  _timerService: TimerService;
  _settingsService: SettingsService;
  _sqliteService: SqliteService;

  constructor(public ts: TimerService, public settings: SettingsService, public sqlite: SqliteService, private routerExtensions: RouterExtensions) {
    this._timerService = ts;
    this._settingsService = settings;
    this._sqliteService = sqlite;

    this._sqliteService.initialize();
  }


  public onTap(interval: number, msg: string) {


    console.log(msg);
    var notification: NotificationModelBase;
    notification = NotificationModelBase.createModel("Title", "Text", 1);



    console.log(notification.getAlarmId());


    // var alert = this.createAlert("Title", "Text", 1);
    // var alarmId = alert.getAlarmId();

    // console.log(alarmId);

    var ctx = utils.ad.getApplicationContext();
    helper.setAlarmClock(ctx, notification);


    this.sqlite.insertAlert(notification)

  }


  // private createAlert(title: string, msg: string, upcoming: number) {

  //   var retVal = new NotificationModelBase(title, msg, upcoming);
  //   return retVal;

  // }


}
