android.content.BroadcastReceiver.extend("com.tns.broadcastreceivers.NotificationServiceStarterReceiver", {
    onReceive: function() {
        var helper = require("../helper/notification-helper");
        var utils = require("utils/utils");
        helper.setAlarmClock(utils.ad.getApplicationContext());
    }
});
