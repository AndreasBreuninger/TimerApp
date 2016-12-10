"use strict";
var core_1 = require('@angular/core');
var Sqlite = require('nativescript-sqlite');
// var Sqlite = require("nativescript-sqlite");
var SqliteService = (function () {
    function SqliteService() {
    }
    // dbname: string
    SqliteService.prototype.initialize = function () {
        // try {
        //     var db = new Sqlite("alarm.db");
        //     db.execSQL("CREATE TABLE IF NOT EXISTS Notifications (id INTEGER PRIMARY KEY AUTOINCREMENT, alarm_id number, title TEXT, msg TEXT, upcoming number)");
        //     this._db = db;
        //     console.log("-- CREATEED TABLE --");
        // }
        // catch (e) {
        //     console.log("OPEN DB ERROR", e);
        var _this = this;
        // }
        (new Sqlite("alarm.db")).then(function (db) {
            _this._db = db;
            db.execSQL("CREATE TABLE IF NOT EXISTS Notifications (id INTEGER PRIMARY KEY AUTOINCREMENT, alarm_id number, title TEXT, msg TEXT, upcoming number)").then(function (id) {
                console.log("CREATED DATABASE");
            }, function (error) {
                console.log("CREATE TABLE ERROR", error);
            });
        }, function (error) {
            console.log("OPEN DB ERROR", error);
        });
    };
    SqliteService.prototype.insertAlert = function (notification) {
        // this._db.execSQL("insert into Hello (word) values (?)", ["Hi"], function (err, id) {
        //     console.log("The new record id is:", id);
        // });
    };
    SqliteService.prototype.getAlertById = function (alarmId) {
        this._db.get('SELECT * FROM Notifications WHERE alarm_id=?', [alarmId], function (err, row) {
            console.log("Row of data was: ", row); // Prints [["Field1", "Field2",...]]
        });
    };
    SqliteService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], SqliteService);
    return SqliteService;
}());
exports.SqliteService = SqliteService;
// exports.Initialize = initialize;
//# sourceMappingURL=sqlite.service.js.map