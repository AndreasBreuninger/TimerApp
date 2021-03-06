"use strict";
var core_1 = require('@angular/core');
var Sqlite = require('nativescript-sqlite');
var SqliteService = (function () {
    function SqliteService() {
    }
    // dbname: string
    SqliteService.prototype.initialize = function () {
        var _this = this;
        (new Sqlite("alarm.db")).then(function (db) {
            _this._db = db;
            db.execSQL("CREATE TABLE IF NOT EXISTS Notifications (id INTEGER PRIMARY KEY AUTOINCREMENT, alarm_id number, title TEXT, msg TEXT, upcoming number, scheduledAt Text)").then(function (id) {
                console.log("CREATED DATABASE");
            }, function (error) {
                console.log("CREATE TABLE ERROR", error);
            });
        }, function (error) {
            console.log("OPEN DB ERROR", error);
        });
    };
    SqliteService.prototype.insertAlert = function (notification) {
        this._db.execSQL("insert into Notifications (alarm_id, title, msg, upcoming, scheduledAt) values (?, ?, ?, ?, ?)", [notification.alarm_id, notification.msgTitle, notification.msgBody, notification.upcoming, notification.scheduledAt], function (err, id) {
            console.log("The new record id is:", id + " " + notification.alarm_id);
            if (err !== null) {
                console.log("error: " + err);
            }
        });
    };
    SqliteService.prototype.getAlertById = function (alarmId) {
        //    function readFileAsync(filename:string) {
        return new Promise(function (resolve, reject) {
            (new Sqlite("alarm.db")).then(function (db) {
                db.get('SELECT * FROM Notifications WHERE alarm_id=?', [alarmId], function (err, row) {
                    resolve(row);
                    console.log("Row of data was: ", row);
                });
            });
        });
    };
    SqliteService.prototype.deleteAlert = function (Id) {
        return new Promise(function (resolve, reject) {
            (new Sqlite("alarm.db")).then(function (db) {
                db.execSQL("delete from Notifications WHERE alarm_id=?", [Id], function (err, id) {
                    resolve(id);
                    // console.log("Row of data was: ", resultSet);
                });
            });
        });
    };
    SqliteService.prototype.getAllAlerts = function () {
        return new Promise(function (resolve, reject) {
            (new Sqlite("alarm.db")).then(function (db) {
                db.all('SELECT * FROM Notifications', function (err, resultSet) {
                    resolve(resultSet);
                    // console.log("Row of data was: ", resultSet);
                });
            });
        });
    };
    SqliteService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], SqliteService);
    return SqliteService;
}());
exports.SqliteService = SqliteService;
//# sourceMappingURL=sqlite.service.js.map