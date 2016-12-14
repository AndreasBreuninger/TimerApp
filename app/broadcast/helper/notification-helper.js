var platformModule = require('platform');



function getStartPendingIntent(context, alarmId) {
    var alarmIntent = new android.content.Intent(context, com.tns.broadcastreceivers.NotificationEventReceiver.class);
    alarmIntent.setAction("ACTION_START_NOTIFICATION_SERVICE");
    alarmIntent.putExtra("alarm_id", alarmId);


    return android.app.PendingIntent.getBroadcast(context, 0, alarmIntent, android.app.PendingIntent.FLAG_UPDATE_CURRENT);
}


function setAlarmClock(context, notificationInfo) {

    var powerManager = context.getSystemService(android.content.Context.POWER_SERVICE);

    var alarmManager = context.getSystemService(android.content.Context.ALARM_SERVICE);
    var alarmIntent = getStartPendingIntent(context, notificationInfo.alarm_id);

    var objCalendar = java.util.Calendar.getInstance();

    objCalendar.setTimeInMillis(java.lang.System.currentTimeMillis());


    // objCalendar.set(java.util.Calendar.YEAR, 2016);
    // objCalendar.set(java.util.Calendar.MONTH, 12);
    // objCalendar.set(java.util.Calendar.DAY_OF_MONTH, 13);
    // objCalendar.set(java.util.Calendar.HOUR_OF_DAY, 13);
    // objCalendar.set(java.util.Calendar.MINUTE, 38);
    // objCalendar.set(java.util.Calendar.SECOND, 0);
    // objCalendar.set(java.util.Calendar.MILLISECOND, 0);


    // objCalendar.clear(); 
    console.log(notificationInfo.upcoming);

    objCalendar.set(objCalendar.get(java.util.Calendar.YEAR), 
    objCalendar.get(java.util.Calendar.MONTH), 
    objCalendar.get(java.util.Calendar.DAY_OF_MONTH), 
    objCalendar.get(java.util.Calendar.HOUR_OF_DAY), 
    objCalendar.get(java.util.Calendar.MINUTE) + 1,     //notificationInfo.upcoming
    objCalendar.get(java.util.Calendar.SECOND));

    // var timeInMillis = notificationInfo.upcoming * 60 * 1000;

    var timeInMillis = objCalendar.getTimeInMillis();

    var debugCalendar = java.util.Calendar.getInstance();
    debugCalendar.setTimeInMillis(timeInMillis);
    console.log("Scheduled: " + debugCalendar.getTime());

    debugCalendar = java.util.Calendar.getInstance();
    debugCalendar.setTimeInMillis(java.lang.System.currentTimeMillis());
    console.log("Time:     " + debugCalendar.getTime());


    var alarmType = android.app.AlarmManager.RTC_WAKEUP;


    var sdkversion = platformModule.device.sdkVersion;


    if (sdkversion < android.os.Build.VERSION_CODES.KITKAT) {
        alarmManager.set(alarmType, timeInMillis, alarmIntent);
    }
    else if (android.os.Build.VERSION_CODES.KITKAT <= sdkversion && sdkversion < android.os.Build.VERSION_CODES.M) {
        alarmManager.setExact(alarmType, timeInMillis, alarmIntent);
    }
    else if (sdkversion >= android.os.Build.VERSION_CODES.M) {
        alarmManager.setExactAndAllowWhileIdle(alarmType, timeInMillis, alarmIntent);
    }

    var wakeLock = powerManager.newWakeLock(android.os.PowerManager.PARTIAL_WAKE_LOCK, "notification-helper");
    wakeLock.acquire(1 * 65 * 1000);        // 65 seconds, 5 extra for the wakelock


    // alarmManager.set(alarmType, timeInMillis, alarmIntent);
    // alarmManager.setExact(alarmType, timeInMillis, alarmIntent);
    // alarmManager.setExactAndAllowWhileIdle(alarmType, timeInMillis, alarmIntent);


    // alarmManager.setExactAndAllowWhileIdle(android.app.AlarmManager.RTC_WAKEUP,
    //     timeInMillis,
    //     alarmIntent);



    // var clockInfo = new android.app.AlarmManager.AlarmClockInfo(timeInMillis, alarmIntent);
    // alarmManager.setAlarmClock(clockInfo, alarmIntent);


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


// function ringtone(context) {

//     var pattern = [0, 250, 200, 250, 200, 250, 200, 250, 200,
//         250, 200, 250, 200, 250, 200];

//     var vibrator = context.getSystemService(android.content.Context.VIBRATOR_SERVICE);
//     vibrator.vibrate(pattern, -1);// No repetition


//     var ringT = android.media.RingtoneManager.getDefaultUri(4);
//     var ringTone = android.media.RingtoneManager.getRingtone(context, ringT);

//     ringTone.play();
// }

// function cancelAlarm(context) { }


// module.exports.setRepeating = setRepeating;
// module.exports.set = set;
module.exports.setAlarmClock = setAlarmClock;
// module.exports.ringtone = ringtone;