import { Observable } from 'data/observable';
// import * as LocalNotifications from "nativescript-local-notifications";
// import * as Dialogs from "ui/dialogs";
// var dialogs = require("ui/dialogs");

var utils = require("utils/utils");
var services = require("./helper/service-helper");

export class MainViewModel extends Observable {


    constructor() {
        super();
    }





    public setReminder() {
       services.set(utils.ad.getApplicationContext());
    }




    // private _counter: number;
    // private _message: string;



    // constructor() {
    //     super();

    //     // Initialize default values.
    //     this._counter = 42;
    //     this.updateMessage();
    // }

    // get message(): string {
    //     return this._message;
    // }

    // set message(value: string) {
    //     if (this._message !== value) {
    //         this._message = value;
    //         this.notifyPropertyChange('message', value)
    //     }
    // }

    // public onTap() {
    //     this._counter--;
    //     this.updateMessage();
    // }

    // private updateMessage() {
    //     if (this._counter <= 0) {
    //         this.message = 'Hoorraaay! You unlocked the NativeScript clicker achievement!';
    //     } else {
    //         this.message = `${this._counter} taps left`;
    //     }
    // }


}