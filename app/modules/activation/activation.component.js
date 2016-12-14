"use strict";
var core_1 = require('@angular/core');
var sqlite_service_1 = require('../../services/sqlite.service');
var NotificationModelBase = require('../../models/NotificationModelBase');
var helper = require('../../broadcast/helper/notification-helper');
var utils = require("utils/utils");
var ActivationComponent = (function () {
    function ActivationComponent(sqliteService) {
        this.sqliteService = sqliteService;
        this._reminders = new Array();
        // this._reminders = [];
        this.sqliteService.getAllAlerts().then(function (rows) {
            var _this = this;
            // this._reminders = rows;
            rows.forEach(function (element) {
                _this._reminders.push(NotificationModelBase.createModel(element[2], element[3], element[4]));
            });
            // this.reminders(rows);
            console.log(this.reminders());
        });
    }
    Object.defineProperty(ActivationComponent.prototype, "reminders", {
        get: function () {
            return this._reminders;
        },
        set: function (v) {
            this._reminders = v;
        },
        enumerable: true,
        configurable: true
    });
    ActivationComponent = __decorate([
        core_1.Component({
            selector: 'activation',
            templateUrl: 'modules/activation/activation.component.html',
            styleUrls: ['modules/activation/activation.component.css'],
        }), 
        __metadata('design:paramtypes', [sqlite_service_1.SqliteService])
    ], ActivationComponent);
    return ActivationComponent;
}());
exports.ActivationComponent = ActivationComponent;
//# sourceMappingURL=activation.component.js.map