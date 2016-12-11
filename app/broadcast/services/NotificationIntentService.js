android.app.IntentService.extend("com.tns.notifications.NotificationIntentService", {

    onHandleIntent: function (intent) {
        // debugger;
        var action = intent.getAction();
        if ("ACTION_START" == action) {

            var alarmId = -1;

            extras = intent.getExtras();
            if (extras == null) {
                alarmId = -1;
            } else {
                alarmId = extras.getInt("alarm_id");
            }

            console.log("alarm id from IntentService " + alarmId);


            processStartNotification(alarmId);

        }

        android.support.v4.content.WakefulBroadcastReceiver.completeWakefulIntent(intent);
    }

});


// import { SqliteService } from '../../services/sqlite.service';
// var SqliteService = require('../../services/sqlite.service');


function processStartNotification(alarmId) {

    var vibrator = require("./VibratorService");
    var utils = require("utils/utils");
    var context = utils.ad.getApplicationContext();


    // var sql = new SqliteService();
    // var notification = sql.getAlertById(alarmId);
    // console.log(this.notification);


    var notificationManager = context.getSystemService(android.content.Context.NOTIFICATION_SERVICE)


    var mainIntent = new android.content.Intent(context, com.schachtelmeier.MainActivity.class);

    // android.content.Intent.FLAG_ACTIVITY_NEW_TASK | 
    // android.content.Intent.FLAG_ACTIVITY_CLEAR_TOP
    mainIntent.setFlags(android.content.Intent.FLAG_ACTIVITY_NEW_TASK);
    var pendingIntent = android.app.PendingIntent.getActivity(context, 0, mainIntent, android.app.PendingIntent.FLAG_UPDATE_CURRENT)

    setContentIntent = new android.support.v4.app.NotificationCompat.Builder(context)
        .setContentTitle("Mööööp!")
        .setContentText("mach was, los! " + alarmId)
        .setStyle(new android.support.v4.app.NotificationCompat.BigTextStyle().bigText("mach was, los!"))
        .setSmallIcon(android.R.drawable.alert_dark_frame)
        .setContentIntent(pendingIntent);

    // var mainIntent = new android.content.Intent(context, com.tns.NativeScriptActivity.class);

    // mainIntent.putExtra("params", "test");

    // mainIntent.setFlags(android.content.Intent.FLAG_ACTIVITY_NEW_TASK);
    // context.startActivity(mainIntent);
    context.startActivity(mainIntent);

    vibrator.vibration(500);

    var ringT = android.media.RingtoneManager.getDefaultUri(4);
    // var ringTone = android.media.RingtoneManager.getRingtone(context, ringT);

    // setContentIntent.setSound(ringT, 4);        // stream alarm
    // setContentIntent.setSound(ringT, 3);        // stream music
    notificationManager.notify(12345, setContentIntent.build());

    // ringTone.play();

}

function getDeleteIntent(context) {
    var intent = new android.content.Intent(context, com.tns.broadcastreceivers.NotificationEventReceiver.class);
    intent.setAction("ACTION_DELETE_NOTIFICATION");
    return android.app.PendingIntent.getBroadcast(context, 0, intent, android.app.PendingIntent.FLAG_UPDATE_CURRENT);
}