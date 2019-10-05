// import { Component, OnInit } from '@angular/core'
// import { DatesService } from './dates.service';


// @Component({
//     templateUrl: './dates.component.html'
// })

// export class DatesComponent implements OnInit{
//   events:any[]
//   constructor(private dateService: DatesService){   
//   }
//   ngOnInit() {
//     this.events = this.dateService.getEvents()
//   }
//     test: string ="Angular Test"
    
//     handleEventClicked(data){
//         console.log(data);
//     }
// }

import { Component } from '@angular/core';

interface Country {
  name: string;
  flag: string;
  area: number;
  population: number;
}

const COUNTRIES: Country[] = [
  {
    name: 'Russia',
    flag: 'f/f3/Flag_of_Russia.svg',
    area: 17075200,
    population: 146989754
  },
  {
    name: 'Canada',
    flag: 'c/cf/Flag_of_Canada.svg',
    area: 9976140,
    population: 36624199
  },
  {
    name: 'United States',
    flag: 'a/a4/Flag_of_the_United_States.svg',
    area: 9629091,
    population: 324459463
  },
  {
    name: 'China',
    flag: 'f/fa/Flag_of_the_People%27s_Republic_of_China.svg',
    area: 9596960,
    population: 1409517397
  }
];

@Component({
  templateUrl: './dates.component.html',
  styleUrls: ['./dates.component.css']
})
export class DatesComponent {

  countries = COUNTRIES;
}
