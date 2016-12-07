"use strict";
var core_1 = require('@angular/core');
var timer_service_1 = require('../../services/timer.service');
var nativescript_angular_1 = require('nativescript-angular');
var helper = require('../../broadcast/helper/notification-helper');
var utils = require("utils/utils");
// import { NativeScriptFormsModule } from "nativescript-angular/forms";
var TimerComponent = (function () {
    function TimerComponent(ts, routerExtensions) {
        this.ts = ts;
        this.routerExtensions = routerExtensions;
        this._timerService = ts;
        // routerExtensions.navigateByUrl("launch");
    }
    TimerComponent.prototype.onTap = function () {
        var ctx = utils.ad.getApplicationContext();
        helper.setAlarmClock(ctx);
        // console.log(this._timerService.timerItem.message);
    };
    TimerComponent = __decorate([
        core_1.Component({
            selector: 'home',
            templateUrl: 'modules/timer/timer.component.html',
            styleUrls: ['modules/timer/timer.component.css'],
            providers: [timer_service_1.TimerService],
        }), 
        __metadata('design:paramtypes', [timer_service_1.TimerService, nativescript_angular_1.RouterExtensions])
    ], TimerComponent);
    return TimerComponent;
}());
exports.TimerComponent = TimerComponent;
//# sourceMappingURL=timer.component.js.map