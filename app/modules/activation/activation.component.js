"use strict";
var core_1 = require('@angular/core');
var sqlite_service_1 = require('../../services/sqlite.service');
var NotificationModelBase = require('../../models/NotificationModelBase');
var helper = require('../../broadcast/helper/notification-helper');
var utils = require("utils/utils");
var ActivationComponent = (function () {
    // public get reminders(): Array<NotificationModelBase> {
    //   return this._reminders;
    // }
    // public set reminders(v: Array<NotificationModelBase>) {
    //   this._reminders = v;
    // }
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
                that.reminders.push(itm);
            });
            // console.log(this.reminders());
        });
    }
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