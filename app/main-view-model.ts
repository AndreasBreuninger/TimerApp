import { Observable } from 'data/observable';
import * as LocalNotifications from "nativescript-local-notifications";
import * as Dialogs from "ui/dialogs";
// var dialogs = require("ui/dialogs");

export class MainViewModel extends Observable {

    public setReminder() {
        LocalNotifications.schedule([{
            id: 1,
            title: 'The title',
            body: 'The body',
            ticker: 'The ticker',
            badge: 1,
            sound: null, // suppress sound on Android
            at: new Date(new Date().getTime() + (10 * 1000)) // 10 seconds from now
        }]).then(
            function () {
                console.log("Notification scheduled");
            },
            function (error) {
                console.log("scheduling error: " + error);
            }
            )
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