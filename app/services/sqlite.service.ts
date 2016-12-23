import { Injectable } from '@angular/core';
let Sqlite = require('nativescript-sqlite');

@Injectable()
export class SqliteService {

    private _db: any;
    constructor() {

    }

    // dbname: string
    initialize() {

        (new Sqlite("alarm.db")).then(db => {
            this._db = db;
            db.execSQL("CREATE TABLE IF NOT EXISTS Notifications (id INTEGER PRIMARY KEY AUTOINCREMENT, alarm_id number, title TEXT, msg TEXT, upcoming number, scheduledAt Text)").then(id => {
                console.log("CREATED DATABASE");
            }, error => {
                console.log("CREATE TABLE ERROR", error);
            });
        }, error => {
            console.log("OPEN DB ERROR", error);
        });
    }


    insertAlert(notification: NotificationModelBase) {

        this._db.execSQL("insert into Notifications (alarm_id, title, msg, upcoming, scheduledAt) values (?, ?, ?, ?, ?)", [notification.alarm_id, notification.msgTitle, notification.msgBody, notification.upcoming, notification.scheduledAt], function (err, id) {
            console.log("The new record id is:", id);
            if (err !== null) {
                console.log("error: " + err);
            }
        });
    }

    getAlertById(alarmId): Promise<any> {

        //    function readFileAsync(filename:string) {
        return new Promise((resolve, reject) => {

            (new Sqlite("alarm.db")).then(db => {
                db.get('SELECT * FROM Notifications WHERE alarm_id=?', [alarmId], function (err, row) {
                    resolve(row);

                    console.log("Row of data was: ", row);
                });
            });
        });
    }

    deleteAlert(Id) {
        this._db.execSQL("delete from Notifications WHERE id=?", [Id], function (err, id) {
            console.log("error: " + err);
        });


    }

    getAllAlerts(): Promise<Array<NotificationModelBase>> {
        return new Promise((resolve, reject) => {

            (new Sqlite("alarm.db")).then(db => {
                db.all('SELECT * FROM Notifications', function (err, resultSet) {
                    resolve(resultSet);

                    // console.log("Row of data was: ", resultSet);
                });
            });

        });

    }
}