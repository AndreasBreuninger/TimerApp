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

  // private _twoWayDataBinding: string;



  // get twoWayDataBinding() {
  //   return this._twoWayDataBinding;
  // }

  // set twoWayDataBinding(value: string) {
  //   this._twoWayDataBinding = value;
  // }



  private _notificationModel: NotificationModelBase;
  public get notificationModel(): NotificationModelBase {
    return this._notificationModel;
  }
  public set notificationModel(v: NotificationModelBase) {
    this._notificationModel = v;
  }


  constructor(public ts: TimerService, public settings: SettingsService, private routerExtensions: RouterExtensions) {
    this._notificationModel = NotificationModelBase.createModel("", "Notification Alert", 1);
  }


  public onTap(interval: number, msg: string) {

    console.log(this._notificationModel.msgBody);

    // var notification: NotificationModelBase;
    // notification = NotificationModelBase.createModel("Title", "Text", 1);

    var ctx = utils.ad.getApplicationContext();
    helper.setAlarmClock(ctx, this._notificationModel);

    this.ts.insertAlert(this._notificationModel);

    this._notificationModel = NotificationModelBase.createModel("", "Notification Alert", 1);

  }
}
