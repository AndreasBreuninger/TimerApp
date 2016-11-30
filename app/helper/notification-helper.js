function getStartPendingIntent(context) {
    var alarmIntent = new android.content.Intent(context, com.tns.broadcastreceivers.NotificationEventReceiver.class);
    alarmIntent.setAction("ACTION_START_NOTIFICATION_SERVICE");
    return android.app.PendingIntent.getBroadcast(context, 0, alarmIntent, android.app.PendingIntent.FLAG_UPDATE_CURRENT);
}
function setupAlarm(context) {
    var alarmManager = context.getSystemService(android.content.Context.ALARM_SERVICE);
    var alarmIntent = getStartPendingIntent(context);
    alarmManager.setRepeating(android.app.AlarmManager.RTC_WAKEUP,
        java.lang.System.currentTimeMillis(),
        1000 * 60 * 60 * 24, /* alarm will send the `alarmIntent` object every 24h */
        alarmIntent);
}

function set(context) {
    var alarmManager = context.getSystemService(android.content.Context.ALARM_SERVICE);
    var alarmIntent = getStartPendingIntent(context);
    alarmManager.set(android.app.AlarmManager.RTC_WAKEUP,
        10000,
        alarmIntent);
}

function setAlarmClock(context) {

    // RQS_1 = 1

    // var intent = new android.content.Intent(context, com.tns.broadcastreceivers.NotificationServiceStarterReceiver.class);
    // var pendingIntent = android.app.PendingIntent.getBroadcast(
    //     context, 1, intent, 0);


    // var alarmManager = context.getSystemService(android.content.Context.ALARM_SERVICE);
    // alarmManager.set(android.app.AlarmManager.RTC_WAKEUP, 10000,
    //     pendingIntent);




    var alarmManager = context.getSystemService(android.content.Context.ALARM_SERVICE);
    var alarmIntent = getStartPendingIntent(context);
    // var clockInfo = new android.app.AlarmManager.AlarmClockInfo(10000,alarmIntent);

    alarmManager.setExactAndAllowWhileIdle(android.app.AlarmManager.RTC_WAKEUP,
        10000,
        alarmIntent);


    // alarmManager.setAlarmClock(clockInfo,
    //     alarmIntent);
}

function ringtone(context) {

    var pattern = [0, 250, 200, 250, 200, 250, 200, 250, 200,
        250, 200, 250, 200, 250, 200];

    var vibrator = context.getSystemService(android.content.Context.VIBRATOR_SERVICE);
    vibrator.vibrate(pattern, -1);// No repetition


    var ringT = android.media.RingtoneManager.getDefaultUri(4);
    var ringTone = android.media.RingtoneManager.getRingtone(context, ringT);

    ringTone.play();
}


function cancelAlarm(context) { }


module.exports.setupAlarm = setupAlarm;
module.exports.set = set;
module.exports.setAlarmClock = setAlarmClock;
module.exports.ringtone = ringtone;