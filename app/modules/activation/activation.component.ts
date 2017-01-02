import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { SqliteService } from '../../services/sqlite.service';
var NotificationModelBase = require('../../models/NotificationModelBase');


var helper = require('../../broadcast/helper/notification-helper');
var utils = require("utils/utils");

@Component({
  selector: 'activation',
  templateUrl: 'modules/activation/activation.component.html',
  styleUrls: ['modules/activation/activation.component.css'],
  providers: [SqliteService],
})

export class ActivationComponent {

  public reminders: Array<NotificationModelBase>;

  constructor(public sqliteService: SqliteService) {
    this.reminders = new Array<NotificationModelBase>();
    // this._reminders = [];
    var that = this;
    this.sqliteService.getAllAlerts().then(function (rows) {
      // this._reminders = rows;
      rows.forEach(element => {
        var itm = NotificationModelBase.createModel(element[2], element[3], element[4]);
        itm.scheduledAt = element[5];
        that.reminders.push(itm);
      });

      // console.log(this.reminders());

    });
  }


  public onItemTap(args) {
    console.log("--> ItemTapped: " + args.index);
    //ToDo: open dialog
    

  }

}
