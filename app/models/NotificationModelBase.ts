interface INotificationModelBasekConstructor {
    new (msgBody: string, msgTitle: string, upcoming: number): INotificationModelBase;
}
interface INotificationModelBase {
    alarm_id: number;
    msgBody: string;
    msgTitle: string;
    upcoming: number;

    getAlarmId();
}

// ctor: INotificationModelBasekConstructor, 
function createModel(msgBody: string, msgTitle: string, upcoming: number): INotificationModelBase {
    // return new ctor(msgBody, msgTitle, upcoming);
    return new NotificationModelBase(msgBody, msgTitle, upcoming);

}

class NotificationModelBase implements INotificationModelBase {
    alarm_id: number;
    msgBody: string;
    msgTitle: string;
    upcoming: number;

    constructor(msgBody: string, msgTitle: string, upcoming: number) {
        this.alarm_id = Math.floor(Math.random() * 1024) + 1;
        this.msgBody = msgBody;
        this.msgTitle = msgTitle;
        this.upcoming = upcoming;
    }


    getAlarmId(): number {
        return this.alarm_id;
    }
}


module.exports.createModel = createModel;