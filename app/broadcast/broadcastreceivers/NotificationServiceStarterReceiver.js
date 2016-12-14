android.content.BroadcastReceiver.extend("com.tns.broadcastreceivers.NotificationServiceStarterReceiver", {
    onReceive: function() {
        var helper = require("../helper/notification-helper");
        var utils = require("utils/utils");

        // Todo: recover pending alerts for e.g. system reboot
        // pass all pending alert id's into setAlarmClock'
        // helper.setAlarmClock(utils.ad.getApplicationContext());
    }
});
