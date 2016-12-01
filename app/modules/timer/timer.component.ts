import {Component, Input, ChangeDetectionStrategy} from '@angular/core';
import { TimerService } from '../../services/timer.service';

@Component({
  selector: 'home',
  templateUrl: 'modules/timer/timer.component.html',
  styleUrls: ['modules/timer/timer.component.css'],
  providers: [TimerService],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class TimerComponent {

  constructor(public ts: TimerService) {

  } 
}
