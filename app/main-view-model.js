"use strict";
var observable_1 = require('data/observable');
var LocalNotifications = require("nativescript-local-notifications");
var MainViewModel = (function (_super) {
    __extends(MainViewModel, _super);
    function MainViewModel() {
        _super.call(this);
        // Initialize default values.
        this._counter = 42;
        this.updateMessage();
    }
    Object.defineProperty(MainViewModel.prototype, "message", {
        get: function () {
            return this._message;
        },
        set: function (value) {
            if (this._message !== value) {
                this._message = value;
                this.notifyPropertyChange('message', value);
            }
        },
        enumerable: true,
        configurable: true
    });
    MainViewModel.prototype.onTap = function () {
        this._counter--;
        this.updateMessage();
    };
    MainViewModel.prototype.updateMessage = function () {
        if (this._counter <= 0) {
            this.message = 'Hoorraaay! You unlocked the NativeScript clicker achievement!';
        }
        else {
            this.message = this._counter + " taps left";
        }
    };
    MainViewModel.prototype.setReminder = function () {
        LocalNotifications.schedule([{
                id: 1,
                title: 'The title',
                body: 'The body',
                ticker: 'The ticker',
                badge: 1,
                sound: null,
                at: new Date(new Date().getTime() + (10 * 1000)) // 10 seconds from now
            }]).then(function () {
            console.log("Notification scheduled");
        }, function (error) {
            console.log("scheduling error: " + error);
        });
    };
    return MainViewModel;
}(observable_1.Observable));
exports.MainViewModel = MainViewModel;
//# sourceMappingURL=main-view-model.js.map