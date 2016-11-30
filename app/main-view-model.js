"use strict";
var observable_1 = require('data/observable');
// import * as LocalNotifications from "nativescript-local-notifications";
// import * as Dialogs from "ui/dialogs";
// var dialogs = require("ui/dialogs");
var utils = require("utils/utils");
var services = require("./helper/service-helper");
var MainViewModel = (function (_super) {
    __extends(MainViewModel, _super);
    function MainViewModel() {
        _super.call(this);
    }
    MainViewModel.prototype.setReminder = function () {
        services.setAlarmClock(utils.ad.getApplicationContext());
    };
    return MainViewModel;
}(observable_1.Observable));
exports.MainViewModel = MainViewModel;
//# sourceMappingURL=main-view-model.js.map