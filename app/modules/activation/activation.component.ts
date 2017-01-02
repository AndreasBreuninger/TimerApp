import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { SqliteService } from '../../services/sqlite.service';
import dialogs = require("ui/dialogs");

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

  public selectedItem: NotificationModelBase;

  constructor(public sqliteService: SqliteService) {
    this.reminders = new Array<NotificationModelBase>();
    // this._reminders = [];
    var that = this;
    this.sqliteService.getAllAlerts().then(function (rows) {
      // this._reminders = rows;
      rows.forEach(element => {
        var itm = NotificationModelBase.createModel(element[2], element[3], element[4]);
        itm.scheduledAt = element[5];
        itm.alarm_id = element[1];
        itm.id = element[0];
        that.reminders.push(itm);
      });

      // console.log(this.reminders());

    });
  }


  public onItemTap(args) {
    console.log("--> ItemTapped: " + args.index);
    var that = this;
    this.selectedItem = null;

    this.selectedItem = this.reminders[args.index];
    if (this.selectedItem !== null) {

      dialogs.confirm({
        title: "Cancel alert?",
        message: this.selectedItem.msgTitle + "\r\n" + this.selectedItem.scheduledAt + " " + this.selectedItem.alarm_id,
        okButtonText: "OK",
        cancelButtonText: "Cancel",
      }).then(result => {
        console.log("Dialog result: " + result);

        if (result == true) {
          var ctx = utils.ad.getApplicationContext();
          helper.cancelAlarm(ctx, this.selectedItem.alarm_id);
          this.sqliteService.deleteAlert(this.selectedItem.alarm_id).then(function (id) {
            that.reminders.splice(args.index);
            console.log(id);

          });
        }
      });



    }
  }

}
