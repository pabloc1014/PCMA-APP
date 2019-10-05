import { Component, OnInit } from '@angular/core'
import { IDate } from './date.model';
import { DatesService } from '../services/dates.service';

@Component({
  templateUrl: './dates.component.html',
  styleUrls: ['./dates.component.css']
})

export class DatesComponent implements OnInit{
  dates : any[]
  constructor(private dateService: DatesService){   
  }
  ngOnInit() {
    this.dates = this.dateService.getDates()
  }
    test: string ="Angular Test"
    
    handleEventClicked(data){
        console.log(data);
    }
}
