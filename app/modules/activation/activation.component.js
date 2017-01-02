"use strict";
var core_1 = require('@angular/core');
var sqlite_service_1 = require('../../services/sqlite.service');
var dialogs = require("ui/dialogs");
var NotificationModelBase = require('../../models/NotificationModelBase');
var helper = require('../../broadcast/helper/notification-helper');
var utils = require("utils/utils");
var ActivationComponent = (function () {
    function ActivationComponent(sqliteService) {
        this.sqliteService = sqliteService;
        this.reminders = new Array();
        // this._reminders = [];
        var that = this;
        this.sqliteService.getAllAlerts().then(function (rows) {
            // this._reminders = rows;
            rows.forEach(function (element) {
                var itm = NotificationModelBase.createModel(element[2], element[3], element[4]);
                itm.scheduledAt = element[5];
                itm.alarm_id = element[1];
                itm.id = element[0];
                that.reminders.push(itm);
            });
            // console.log(this.reminders());
        });
    }
    ActivationComponent.prototype.onItemTap = function (args) {
        var _this = this;
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
            }).then(function (result) {
                console.log("Dialog result: " + result);
                if (result == true) {
                    var ctx = utils.ad.getApplicationContext();
                    helper.cancelAlarm(ctx, _this.selectedItem.alarm_id);
                    _this.sqliteService.deleteAlert(_this.selectedItem.alarm_id).then(function (id) {
                        that.reminders.splice(args.index);
                        console.log(id);
                    });
                }
            });
        }
    };
    ActivationComponent = __decorate([
        core_1.Component({
            selector: 'activation',
            templateUrl: 'modules/activation/activation.component.html',
            styleUrls: ['modules/activation/activation.component.css'],
            providers: [sqlite_service_1.SqliteService],
        }), 
        __metadata('design:paramtypes', [sqlite_service_1.SqliteService])
    ], ActivationComponent);
    return ActivationComponent;
}());
exports.ActivationComponent = ActivationComponent;
//# sourceMappingURL=activation.component.js.map