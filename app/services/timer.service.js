"use strict";
var core_1 = require('@angular/core');
var TimerService = (function () {
    function TimerService() {
        this._timerItem = new TimerItem(1, "Hallo Welt");
    }
    Object.defineProperty(TimerService.prototype, "timerItem", {
        // @Input()
        get: function () {
            return this._timerItem;
        },
        set: function (v) {
            this._timerItem = v;
        },
        enumerable: true,
        configurable: true
    });
    TimerService.prototype.createTimer = function (interval, msg) {
        this._timerItem.message = msg;
        this._timerItem.upcoming = interval * 60 * 1000;
    };
    TimerService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], TimerService);
    return TimerService;
}());
exports.TimerService = TimerService;
var TimerItem = (function () {
    function TimerItem(upcoming, message) {
        this.upcoming = upcoming;
        this.message = message;
    }
    return TimerItem;
}());
//# sourceMappingURL=timer.service.js.map