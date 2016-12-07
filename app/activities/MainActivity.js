"use strict";
var frame_1 = require("ui/frame");
var MainActivity = (function (_super) {
    __extends(MainActivity, _super);
    function MainActivity() {
        _super.apply(this, arguments);
    }
    MainActivity.prototype.onCreate = function (savedInstanceState) {
        if (!this._callbacks) {
            frame_1.setActivityCallbacks(this);
        }
        this._callbacks.onCreate(this, savedInstanceState, _super.prototype.onCreate);
    };
    MainActivity.prototype.onSaveInstanceState = function (outState) {
        this._callbacks.onSaveInstanceState(this, outState, _super.prototype.onSaveInstanceState);
    };
    MainActivity.prototype.onStart = function () {
        this._callbacks.onStart(this, _super.prototype.onStart);
    };
    MainActivity.prototype.onStop = function () {
        this._callbacks.onStop(this, _super.prototype.onStop);
    };
    MainActivity.prototype.onDestroy = function () {
        this._callbacks.onDestroy(this, _super.prototype.onDestroy);
    };
    MainActivity.prototype.onBackPressed = function () {
        this._callbacks.onBackPressed(this, _super.prototype.onBackPressed);
    };
    MainActivity.prototype.onRequestPermissionsResult = function (requestCode, permissions, grantResults) {
        this._callbacks.onRequestPermissionsResult(this, requestCode, permissions, grantResults, undefined /*TODO: Enable if needed*/);
    };
    MainActivity.prototype.onActivityResult = function (requestCode, resultCode, data) {
        this._callbacks.onActivityResult(this, requestCode, resultCode, data, _super.prototype.onActivityResult);
    };
    MainActivity = __decorate([
        JavaProxy("com.schachtelmeier.MainActivity"), 
        __metadata('design:paramtypes', [])
    ], MainActivity);
    return MainActivity;
}(android.app.Activity));
//# sourceMappingURL=MainActivity.js.map