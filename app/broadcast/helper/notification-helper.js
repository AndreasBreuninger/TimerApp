// import { Injectable, Input } from '@angular/core';

// @Injectable()
// export class NotificationHelper {


// }



function getStartPendingIntent(context,alarmId) {
    var alarmIntent = new android.content.Intent(context, com.tns.broadcastreceivers.NotificationEventReceiver.class);
    alarmIntent.setAction("ACTION_START_NOTIFICATION_SERVICE");
    alarmIntent.putExtra("alarm_id", alarmId);
    
    
    return android.app.PendingIntent.getBroadcast(context, 0, alarmIntent, android.app.PendingIntent.FLAG_UPDATE_CURRENT);
}


function setAlarmClock(context, notificationInfo) {

    var alarmManager = context.getSystemService(android.content.Context.ALARM_SERVICE);
    var alarmIntent = getStartPendingIntent(context, notificationInfo.alarm_id);

    alarmManager.setExactAndAllowWhileIdle(android.app.AlarmManager.RTC_WAKEUP,
        notificationInfo.upcoming * 1000,
        alarmIntent);
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