import {Component, Input, ChangeDetectionStrategy} from '@angular/core';
import { HomeComponentViewModel } from './home-component.view-model';

@Component({
  selector: 'home',
  templateUrl: 'modules/home/home.component.html',
  styleUrls: ['modules/home/home.component.css'],
  providers: [HomeComponentViewModel],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class HomeComponent {

  constructor(public cvm: HomeComponentViewModel) {

  } 
}
