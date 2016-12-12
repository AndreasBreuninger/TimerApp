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
    }
    TimerComponent.prototype.onTap = function (interval, msg) {
        var notification;
        notification = NotificationModelBase.createModel("Title", "Text", 1);
        var ctx = utils.ad.getApplicationContext();
        helper.setAlarmClock(ctx, notification);
        this.ts.insertAlert(notification);
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