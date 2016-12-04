import { Injectable, Input } from '@angular/core';

@Injectable()
export class TimerService {

  private _timerItem: TimerItem;

  // @Input()
  public get timerItem(): TimerItem {
    return this._timerItem;
  }
  public set timerItem(v: TimerItem) {
    this._timerItem = v;
  }


  constructor() {
    this._timerItem = new TimerItem(1, "Hallo Welt");
  }

  public createTimer(interval: number, msg: string) {

    this._timerItem.message = msg;
    this._timerItem.upcoming = interval * 60 * 1000;

  }

  // public setMessage(msg: string) {


  // }

  // public setInterval(minutes: number) {


  // }

}

class TimerItem {
  constructor(public upcoming: number, public message: string) { }
}
