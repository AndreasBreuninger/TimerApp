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
  styles: [
    `
  .selected {
    background-color: #4D8EFF;
  }
  `
  ]
})

export class TimerComponent {

  public isBtn1Selected: boolean;
  public isBtn2Selected: boolean;
  public isBtn5Selected: boolean;
  public isBtn10Selected: boolean;
  public isBtn20Selected: boolean;
  public isBtn30Selected: boolean;
  public isBtn45Selected: boolean;
  public isBtnCustom5Selected: boolean;


  private _notificationModel: NotificationModelBase;
  public get notificationModel(): NotificationModelBase {
    return this._notificationModel;
  }
  public set notificationModel(v: NotificationModelBase) {
    this._notificationModel = v;
  }

  public items: Array<Object>;
  constructor(public ts: TimerService, public settings: SettingsService, private routerExtensions: RouterExtensions) {
    this._notificationModel = NotificationModelBase.createModel("", "Notification Alert", 60);
  }


  public onTap() {

    var ctx = utils.ad.getApplicationContext();
    var scheduledAt = helper.setAlarmClock(ctx, this._notificationModel);
    this.notificationModel.scheduledAt = scheduledAt;

    this.ts.insertAlert(this._notificationModel);
    this.deselectAllButtons();
    console.log(scheduledAt);
    console.log(this._notificationModel.alarm_id);
    this._notificationModel = NotificationModelBase.createModel("", "Notification Alert", 60);
  }


  public setMinuteTimer(interval: number) {
    this._notificationModel.upcoming = interval;

    this.updateSelectedButton(interval);
  }

  public updateSelectedButton(interval: number) {

    this.deselectAllButtons();

    switch (interval) {
      case 1:
        this.isBtn1Selected = true;
        break;
      case 2:
        this.isBtn2Selected = true;
        break;
      case 5:
        this.isBtn5Selected = true;
        break;
      case 10:
        this.isBtn10Selected = true;
        break;
      case 20:
        this.isBtn20Selected = true;
        break;
      case 30:
        this.isBtn30Selected = true;
        break;
      case 45:
        this.isBtn45Selected = true;
        break;
      default:
        this.isBtnCustom5Selected = true;
        break;
    }
  }

  private deselectAllButtons() {
    this.isBtn1Selected = this.isBtnCustom5Selected = this.isBtn10Selected = this.isBtn20Selected = this.isBtn2Selected = this.isBtn5Selected = this.isBtn30Selected = this.isBtn45Selected = false;

  }


}
