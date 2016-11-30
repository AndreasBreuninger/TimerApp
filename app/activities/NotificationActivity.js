var frame = require("ui/frame");
var superProto = android.app.Activity.prototype;

android.app.Activity.extend("com.tns.activities.NotificationActivity", {
    onCreate: function (savedInstanceState) {
        if (!this._callbacks) {
            frame.setActivityCallbacks(this);
        }
        // Modules will take care of calling super.onCreate, do not call it here
        this._callbacks.onCreate(this, savedInstanceState, superProto.onCreate);

        // Add custom initialization logic here
    }
});