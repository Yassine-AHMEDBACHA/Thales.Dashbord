import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { stat } from './stat';
import { StatisticService } from './statistic.service';

@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.css']
})
export class StatisticComponent  {

  stats : Observable<stat[]>;
  constructor(private statisticService : StatisticService ) {
    this.stats = this.statisticService.Load();
  }

 

}
