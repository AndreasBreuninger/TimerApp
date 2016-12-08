// class NotificationModelBase {
// ctor: INotificationModelBasekConstructor, 
function createModel(msgBody, msgTitle, upcoming) {
    // return new ctor(msgBody, msgTitle, upcoming);
    return new NotificationModelBase(msgBody, msgTitle, upcoming);
}
var NotificationModelBase = (function () {
    function NotificationModelBase(msgBody, msgTitle, upcoming) {
        this.alarm_id = Math.floor(Math.random() * 1024) + 1;
    }
    NotificationModelBase.prototype.getAlarmId = function () {
        return this.alarm_id;
    };
    return NotificationModelBase;
}());
module.exports.createModel = createModel;
// interface ClockInterface {
//     currentTime: Date;
// }
// class Clock implements ClockInterface {
//     currentTime: Date;
//     constructor(h: number, m: number) { }
// } 
//# sourceMappingURL=NotificationModelBase.js.map