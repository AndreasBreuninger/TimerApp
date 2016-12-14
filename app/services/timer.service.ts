import { Injectable, Input } from '@angular/core';
import { SqliteService } from './sqlite.service';

@Injectable()
export class TimerService {


  constructor(public sqlService: SqliteService) {
    this.sqlService.initialize();
  }

  insertAlert(notification: NotificationModelBase) {
    this.sqlService.insertAlert(notification);

  }

}