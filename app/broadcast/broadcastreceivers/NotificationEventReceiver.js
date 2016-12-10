android.support.v4.content.WakefulBroadcastReceiver.extend("com.tns.broadcastreceivers.NotificationEventReceiver", {
    onReceive: function (context, intent) {
        var action = intent.getAction();

        var alarmId = -1;

        extras = intent.getExtras();
        if (extras == null) {
            alarmId = -1;
        } else {
            alarmId = extras.getInt("alarm_id");
        }

        console.log("alarm id from EventReceiver " + alarmId);

        var serviceIntent = null;
        if ("ACTION_START_NOTIFICATION_SERVICE" == action) {
            console.log("onReceive from alarm, starting notification service! thread: " + java.lang.Thread.currentThread().getName());
            serviceIntent = createIntentStartNotificationService(context);
        } else if ("ACTION_DELETE_NOTIFICATION" == action) {
            console.log("onReceive delete notification action, starting notification service to handle delete");
            serviceIntent = createIntentDeleteNotification(context);
        }

        if (serviceIntent) {

            serviceIntent.putExtra("alarm_id", alarmId);

            android.support.v4.content.WakefulBroadcastReceiver.startWakefulService(context, serviceIntent);
        }
    }
})

var Intent = android.content.Intent;


function createIntentStartNotificationService(context) {
    var intent = new Intent(context, com.tns.notifications.NotificationIntentService.class);
    intent.setAction("ACTION_START");
    return intent;
}

function createIntentDeleteNotification(context) {
    var intent = new Intent(context, com.tns.notifications.NotificationIntentService.class);
    intent.setAction("ACTION_DELETE");
    return intent;
}
