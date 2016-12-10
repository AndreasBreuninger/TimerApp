import { Injectable } from '@angular/core';
let Sqlite = require('nativescript-sqlite');
// var Sqlite = require("nativescript-sqlite");

@Injectable()
export class SqliteService {

    private _db: any;
    constructor() {

    }

    // dbname: string
    initialize() {

        // try {
        //     var db = new Sqlite("alarm.db");
        //     db.execSQL("CREATE TABLE IF NOT EXISTS Notifications (id INTEGER PRIMARY KEY AUTOINCREMENT, alarm_id number, title TEXT, msg TEXT, upcoming number)");
        //     this._db = db;
        //     console.log("-- CREATEED TABLE --");
        // }
        // catch (e) {
        //     console.log("OPEN DB ERROR", e);

        // }



        (new Sqlite("alarm.db")).then(db => {
            this._db = db;
            db.execSQL("CREATE TABLE IF NOT EXISTS Notifications (id INTEGER PRIMARY KEY AUTOINCREMENT, alarm_id number, title TEXT, msg TEXT, upcoming number)").then(id => {
                console.log("CREATED DATABASE");
            }, error => {
                console.log("CREATE TABLE ERROR", error);
            });
        }, error => {
            console.log("OPEN DB ERROR", error);
        });
    }



    insertAlert(notification: NotificationModelBase) {

        // this._db.execSQL("insert into Hello (word) values (?)", ["Hi"], function (err, id) {
        //     console.log("The new record id is:", id);
        // });
    }

    getAlertById(alarmId) {

        this._db.get('SELECT * FROM Notifications WHERE alarm_id=?', [alarmId], function (err, row) {
            console.log("Row of data was: ", row);  // Prints [["Field1", "Field2",...]]
        });
    }

}
// exports.Initialize = initialize;
