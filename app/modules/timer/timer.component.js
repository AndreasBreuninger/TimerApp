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
        this._notificationModel = NotificationModelBase.createModel("", "Notification Alert", 60);
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
    TimerComponent.prototype.onTap = function () {
        var ctx = utils.ad.getApplicationContext();
        var scheduledAt = helper.setAlarmClock(ctx, this._notificationModel);
        this.notificationModel.scheduledAt = scheduledAt;
        this.ts.insertAlert(this._notificationModel);
        this.deselectAllButtons();
        console.log(scheduledAt);
        this._notificationModel = NotificationModelBase.createModel("", "Notification Alert", 60);
    };
    TimerComponent.prototype.setMinuteTimer = function (interval) {
        this._notificationModel.upcoming = interval;
        this.updateSelectedButton(interval);
    };
    TimerComponent.prototype.updateSelectedButton = function (interval) {
        this.deselectAllButtons();
        switch (interval) {
            case 1:
                this.isBtn1Selected = true;
                break;
            case 2:
                this.isBtn2Selected = true;
                break;
            case 5:
                this.isBtn5Selected = true;
                break;
            case 10:
                this.isBtn10Selected = true;
                break;
            case 20:
                this.isBtn20Selected = true;
                break;
            case 30:
                this.isBtn30Selected = true;
                break;
            case 45:
                this.isBtn45Selected = true;
                break;
            default:
                this.isBtnCustom5Selected = true;
                break;
        }
    };
    TimerComponent.prototype.deselectAllButtons = function () {
        this.isBtn1Selected = this.isBtnCustom5Selected = this.isBtn10Selected = this.isBtn20Selected = this.isBtn2Selected = this.isBtn5Selected = this.isBtn30Selected = this.isBtn45Selected = false;
    };
    TimerComponent = __decorate([
        core_1.Component({
            selector: 'home',
            templateUrl: 'modules/timer/timer.component.html',
            styleUrls: ['modules/timer/timer.component.css'],
            providers: [timer_service_1.TimerService, settings_service_1.SettingsService],
            styles: [
                "\n  .selected {\n    background-color: #4D8EFF;\n  }\n  "
            ]
        }), 
        __metadata('design:paramtypes', [timer_service_1.TimerService, settings_service_1.SettingsService, nativescript_angular_1.RouterExtensions])
    ], TimerComponent);
    return TimerComponent;
}());
exports.TimerComponent = TimerComponent;
//# sourceMappingURL=timer.component.js.map