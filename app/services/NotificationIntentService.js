android.app.IntentService.extend("com.tns.notifications.NotificationIntentService", {

    onHandleIntent: function (intent) {
        var action = intent.getAction();
        if ("ACTION_START" == action) {
            processStartNotification();
        }

        android.support.v4.content.WakefulBroadcastReceiver.completeWakefulIntent(intent);
    }

});

function processStartNotification() {

    var vibrator = require("./VibratorService");
    var utils = require("utils/utils");
    var context = utils.ad.getApplicationContext();


    // var mainIntent = new android.content.Intent(context, com.tns.NativeScriptActivity.class);
    var mainIntent = new android.content.Intent(context, com.tns.activities.NotificationActivity.class);


    mainIntent.setFlags(android.content.Intent.FLAG_ACTIVITY_NEW_TASK);
    context.startActivity(mainIntent);

    vibrator.vibration(500);

    var ringT = android.media.RingtoneManager.getDefaultUri(4);
    var ringTone = android.media.RingtoneManager.getRingtone(context, ringT);

    ringTone.play();

}

function getDeleteIntent(context) {
    var intent = new android.content.Intent(context, com.tns.broadcastreceivers.NotificationEventReceiver.class);
    intent.setAction("ACTION_DELETE_NOTIFICATION");
    return android.app.PendingIntent.getBroadcast(context, 0, intent, android.app.PendingIntent.FLAG_UPDATE_CURRENT);
}