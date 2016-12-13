"use strict";
var core_1 = require('@angular/core');
var timer_service_1 = require('../../services/timer.service');
var settings_service_1 = require('../../services/settings.service');
var nativescript_angular_1 = require('nativescript-angular');
var NotificationModelBase = require('../../models/NotificationModelBase');
var helper = require('../../broadcast/helper/notification-helper');
var utils = require("utils/utils");
var TimerComponent = (function () {
    function TimerComponent(ts, settings, routerExtensions) {
        this.ts = ts;
        this.settings = settings;
        this.routerExtensions = routerExtensions;
        this._notificationModel = NotificationModelBase.createModel("", "Notification Alert", 1);
    }
    Object.defineProperty(TimerComponent.prototype, "notificationModel", {
        get: function () {
            return this._notificationModel;
        },
        set: function (v) {
            this._notificationModel = v;
        },
        enumerable: true,
        configurable: true
    });
    TimerComponent.prototype.onTap = function (interval, msg) {
        console.log(this._notificationModel.msgBody);
        // var notification: NotificationModelBase;
        // notification = NotificationModelBase.createModel("Title", "Text", 1);
        var ctx = utils.ad.getApplicationContext();
        helper.setAlarmClock(ctx, this._notificationModel);
        this.ts.insertAlert(this._notificationModel);
        this._notificationModel = NotificationModelBase.createModel("", "Notification Alert", 1);
    };
    TimerComponent = __decorate([
        core_1.Component({
            selector: 'home',
            templateUrl: 'modules/timer/timer.component.html',
            styleUrls: ['modules/timer/timer.component.css'],
            providers: [timer_service_1.TimerService, settings_service_1.SettingsService],
        }), 
        __metadata('design:paramtypes', [timer_service_1.TimerService, settings_service_1.SettingsService, nativescript_angular_1.RouterExtensions])
    ], TimerComponent);
    return TimerComponent;
}());
exports.TimerComponent = TimerComponent;
//# sourceMappingURL=timer.component.js.map