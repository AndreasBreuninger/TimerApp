"use strict";
var core_1 = require('@angular/core');
var AppSettings = require('application-settings');
var SettingsService = (function () {
    function SettingsService() {
    }
    SettingsService.prototype.hasSetting = function (key) {
        return AppSettings.hasKey(key);
    };
    SettingsService.prototype.getString = function (key) {
        if (this.hasSetting(key)) {
            return AppSettings.getString(key);
        }
        return "";
    };
    SettingsService.prototype.getInteger = function (key) {
        if (this.hasSetting(key)) {
            return AppSettings.getNumber(key);
        }
        return -1;
    };
    SettingsService.prototype.getBool = function (key) {
        if (this.hasSetting(key)) {
            return AppSettings.getBoolean(key);
        }
        return false;
    };
    SettingsService.prototype.setInteger = function (key, value) {
        return AppSettings.setNumber(key, value);
    };
    SettingsService.prototype.setString = function (key, value) {
        return AppSettings.setString(key, value);
    };
    SettingsService.prototype.setBool = function (key, value) {
        return AppSettings.setBoolean(key, value);
    };
    SettingsService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], SettingsService);
    return SettingsService;
}());
exports.SettingsService = SettingsService;
//# sourceMappingURL=settings.service.js.map