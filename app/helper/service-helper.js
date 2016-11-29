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


function cancelAlarm(context) { }


module.exports.setupAlarm = setupAlarm;
module.exports.set = set;
