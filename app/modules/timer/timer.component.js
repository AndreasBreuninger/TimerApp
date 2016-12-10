"use strict";
var core_1 = require('@angular/core');
var timer_service_1 = require('../../services/timer.service');
var settings_service_1 = require('../../services/settings.service');
var sqlite_service_1 = require('../../services/sqlite.service');
var nativescript_angular_1 = require('nativescript-angular');
var NotificationModelBase = require('../../models/NotificationModelBase');
var helper = require('../../broadcast/helper/notification-helper');
var utils = require("utils/utils");
var TimerComponent = (function () {
    function TimerComponent(ts, settings, sqlite, routerExtensions) {
        this.ts = ts;
        this.settings = settings;
        this.sqlite = sqlite;
        this.routerExtensions = routerExtensions;
        this._timerService = ts;
        this._settingsService = settings;
        this._sqliteService = sqlite;
        this._sqliteService.initialize();
    }
    TimerComponent.prototype.onTap = function (interval, msg) {
        console.log(msg);
        var x;
        x = NotificationModelBase.createModel("Title", "Text", 1);
        console.log(x.getAlarmId());
        // var alert = this.createAlert("Title", "Text", 1);
        // var alarmId = alert.getAlarmId();
        // console.log(alarmId);
        var ctx = utils.ad.getApplicationContext();
        helper.setAlarmClock(ctx, x);
    };
    TimerComponent = __decorate([
        core_1.Component({
            selector: 'home',
            templateUrl: 'modules/timer/timer.component.html',
            styleUrls: ['modules/timer/timer.component.css'],
            providers: [timer_service_1.TimerService, settings_service_1.SettingsService, sqlite_service_1.SqliteService],
        }), 
        __metadata('design:paramtypes', [timer_service_1.TimerService, settings_service_1.SettingsService, sqlite_service_1.SqliteService, nativescript_angular_1.RouterExtensions])
    ], TimerComponent);
    return TimerComponent;
}());
exports.TimerComponent = TimerComponent;
//# sourceMappingURL=timer.component.js.map