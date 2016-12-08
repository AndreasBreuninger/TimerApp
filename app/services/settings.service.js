"use strict";
var core_1 = require('@angular/core');
var AppSettings = require('application-settings');
// var appSettings = require("application-settings");
var SettingsService = (function () {
    function SettingsService() {
    }
    SettingsService.prototype.hasSetting = function (key) {
        return AppSettings.hasKey(key);
    };
    SettingsService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], SettingsService);
    return SettingsService;
}());
exports.SettingsService = SettingsService;
//# sourceMappingURL=settings.service.js.map