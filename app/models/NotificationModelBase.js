// ctor: INotificationModelBasekConstructor, 
function createModel(msgBody, msgTitle, upcoming) {
    // return new ctor(msgBody, msgTitle, upcoming);
    return new NotificationModelBase(msgBody, msgTitle, upcoming);
}
var NotificationModelBase = (function () {
    function NotificationModelBase(msgBody, msgTitle, upcoming) {
        this.alarm_id = Math.floor(Math.random() * 1024) + 1;
        this.msgBody = msgBody;
        this.msgTitle = msgTitle;
        this.upcoming = upcoming;
    }
    NotificationModelBase.prototype.getAlarmId = function () {
        return this.alarm_id;
    };
    return NotificationModelBase;
}());
module.exports.createModel = createModel;
//# sourceMappingURL=NotificationModelBase.js.map