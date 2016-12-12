"use strict";
var core_1 = require('@angular/core');
var sqlite_service_1 = require('./sqlite.service');
var TimerService = (function () {
    function TimerService(sqlService) {
        this.sqlService = sqlService;
        this.sqlService.initialize();
    }
    TimerService.prototype.insertAlert = function (notification) {
        this.sqlService.insertAlert(notification);
    };
    TimerService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [sqlite_service_1.SqliteService])
    ], TimerService);
    return TimerService;
}());
exports.TimerService = TimerService;
//# sourceMappingURL=timer.service.js.map