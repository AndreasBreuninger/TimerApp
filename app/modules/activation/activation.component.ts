import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { SqliteService } from '../../services/sqlite.service';
var NotificationModelBase = require('../../models/NotificationModelBase');


var helper = require('../../broadcast/helper/notification-helper');
var utils = require("utils/utils");

@Component({
  selector: 'activation',
  templateUrl: 'modules/activation/activation.component.html',
  styleUrls: ['modules/activation/activation.component.css'],
  //   providers: [TimerService],
})

export class ActivationComponent {


  private _reminders: Array<NotificationModelBase>;
  public get reminders(): Array<NotificationModelBase> {
    return this._reminders;
  }
  public set reminders(v: Array<NotificationModelBase>) {
    this._reminders = v;
  }


  constructor(public sqliteService: SqliteService) {
    this._reminders = new Array<NotificationModelBase>();
    // this._reminders = [];

    this.sqliteService.getAllAlerts().then(function (rows) {
      // this._reminders = rows;
      rows.forEach(element => {
        this._reminders.push(
          NotificationModelBase.createModel(element[2], element[3], element[4])

        );
      });



      // this.reminders(rows);

      console.log(this.reminders());


    });
  }

}
