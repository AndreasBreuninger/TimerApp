var platformModule = require('platform');



function getStartPendingIntent(context, alarmId) {
    var alarmIntent = new android.content.Intent(context, com.tns.broadcastreceivers.NotificationEventReceiver.class);
    alarmIntent.setAction("ACTION_START_NOTIFICATION_SERVICE");
    alarmIntent.putExtra("alarm_id", alarmId);


    return android.app.PendingIntent.getBroadcast(context, alarmId, alarmIntent, android.app.PendingIntent.FLAG_ONE_SHOT);
}


function setAlarmClock(context, notificationInfo){

    var sdkversion = platformModule.device.sdkVersion;

    var powerManager = context.getSystemService(android.content.Context.POWER_SERVICE);

    var alarmManager = context.getSystemService(android.content.Context.ALARM_SERVICE);
    var alarmIntent = getStartPendingIntent(context, notificationInfo.alarm_id);
    var alarmType = android.app.AlarmManager.RTC_WAKEUP;


    var objCalendar = java.util.Calendar.getInstance();

    objCalendar.setTimeInMillis(java.lang.System.currentTimeMillis());


    objCalendar.set(
        objCalendar.get(java.util.Calendar.YEAR),
        objCalendar.get(java.util.Calendar.MONTH),
        objCalendar.get(java.util.Calendar.DAY_OF_MONTH),
        objCalendar.get(java.util.Calendar.HOUR_OF_DAY),
        objCalendar.get(java.util.Calendar.MINUTE) + parseInt(notificationInfo.upcoming),     
        objCalendar.get(java.util.Calendar.SECOND));


    var timeInMillis = objCalendar.getTimeInMillis();


    var debugCalendar = java.util.Calendar.getInstance();
    debugCalendar.setTimeInMillis(timeInMillis);

    // return the datetime so update database object
    var retVal = debugCalendar.getTime();

    console.log("Scheduled: " + retVal);

    debugCalendar = java.util.Calendar.getInstance();
    debugCalendar.setTimeInMillis(java.lang.System.currentTimeMillis());
    console.log("Time:     " + debugCalendar.getTime());



    if (sdkversion < android.os.Build.VERSION_CODES.KITKAT) {
        alarmManager.set(alarmType, timeInMillis, alarmIntent);
    }
    else if (android.os.Build.VERSION_CODES.KITKAT <= sdkversion && sdkversion < 23) {  // android.os.Build.VERSION_CODES.M
        alarmManager.setExact(alarmType, timeInMillis, alarmIntent);
    }
    else if (sdkversion >= 23) {    //android.os.Build.VERSION_CODES.M
        alarmManager.setExactAndAllowWhileIdle(alarmType, timeInMillis, alarmIntent);
    }

    // var wakeLock = powerManager.newWakeLock(android.os.PowerManager.PARTIAL_WAKE_LOCK, "notification-helper");
    // wakeLock.acquire(parseInt(notificationInfo.upcoming) * 1000);        // 65 seconds, 5 extra for the wakelock

    return retVal;
}


// function setRepeating(context) {
//     var alarmManager = context.getSystemService(android.content.Context.ALARM_SERVICE);
//     var alarmIntent = getStartPendingIntent(context);
//     alarmManager.setRepeating(android.app.AlarmManager.RTC_WAKEUP,
//         java.lang.System.currentTimeMillis(),
//         1000 * 60 * 60 * 24, /* alarm will send the `alarmIntent` object every 24h */
//         alarmIntent);
// }

// function set(context) {
//     var alarmManager = context.getSystemService(android.content.Context.ALARM_SERVICE);
//     var alarmIntent = getStartPendingIntent(context);
//     alarmManager.set(android.app.AlarmManager.RTC_WAKEUP,
//         10000,
//         alarmIntent);
// }

module.exports.setAlarmClock = setAlarmClock;