"use strict";
var core_1 = require('@angular/core');
var Sqlite = require('nativescript-sqlite');
// var Sqlite = require("nativescript-sqlite");
var SqliteService = (function () {
    function SqliteService() {
    }
    // dbname: string
    SqliteService.prototype.initialize = function () {
        try {
            var db = new Sqlite("alarm.db");
            db.execSQL("CREATE TABLE IF NOT EXISTS Notifications (id INTEGER PRIMARY KEY AUTOINCREMENT, alarm_id number, title TEXT, msg TEXT, upcoming number)");
            this._db = db;
            console.log("-- CREATEED TABLE --");
        }
        catch (e) {
            console.log("OPEN DB ERROR", e);
        }
        // (new Sqlite("alarm.db")).then(db => {
        //     db.execSQL("CREATE TABLE IF NOT EXISTS Notifications (id INTEGER PRIMARY KEY AUTOINCREMENT, alarm_id number, title TEXT, msg TEXT, upcoming number)").then(id => {
        //         console.log("CREATED DATABASE");
        //     }, error => {
        //         console.log("CREATE TABLE ERROR", error);
        //     });
        // }, error => {
        //     console.log("OPEN DB ERROR", error);
        // });
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