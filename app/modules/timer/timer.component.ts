import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { TimerService } from '../../services/timer.service';
import { SettingsService } from '../../services/settings.service';
import { RouterExtensions } from 'nativescript-angular';

var helper = require('../../broadcast/helper/notification-helper');
var utils = require("utils/utils");
// import { NativeScriptFormsModule } from "nativescript-angular/forms";

@Component({
  selector: 'home',
  templateUrl: 'modules/timer/timer.component.html',
  styleUrls: ['modules/timer/timer.component.css'],
  providers: [TimerService, SettingsService],
})

export class TimerComponent {

  _timerService: TimerService;
  _settingsService: SettingsService;

  constructor(public ts: TimerService, public settings: SettingsService, private routerExtensions: RouterExtensions) {
    this._timerService = ts;
    this._settingsService = settings;
    // var hasSetting = this._settingsService.hasSetting("test");

    // console.log(hasSetting);
    // routerExtensions.navigateByUrl("launch");
  }

  public onTap() {

    var ctx = utils.ad.getApplicationContext();
    helper.setAlarmClock(ctx);
    // console.log(this._timerService.timerItem.message);
  }
}
