// class NotificationModelBase {

//     private alarm_id: number;
//     private msgBody: string;
//     private msgTitle: string;
//     private upcoming: number;

//     constructor(body: string, title: string, upcoming: number) {

//         this.alarm_id = Math.floor(Math.random() * 1024) + 1
//         this.msgBody = body;
//         this.msgTitle = title;
//         this.upcoming = upcoming;
//     }

//     public getAlarmId() {
//         return this.alarm_id;
//     }
// }





interface INotificationModelBasekConstructor {
    new (msgBody: string, msgTitle: string, upcoming: number): INotificationModelBase;
}
interface INotificationModelBase {
    alarm_id: number;
       
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
        this.alarm_id = Math.floor(Math.random() * 1024) + 1
    }


    getAlarmId() {
        return this.alarm_id;
    }
}


module.exports.createModel = createModel;



// interface ClockInterface {
//     currentTime: Date;
// }

// class Clock implements ClockInterface {
//     currentTime: Date;
//     constructor(h: number, m: number) { }
// }