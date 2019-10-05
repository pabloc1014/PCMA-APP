import { Injectable } from '@angular/core';

@Injectable()
export class DatesService {
    getDates() {
        return datesElemets
    }

    getDate(id:number){
      return datesElemets.find(event=> event.idDate === id)
    }
}
const datesElemets = [
    {
      idDate: 1,
      firstName: "Pablo",
      lastName: "Cogua",
      userId: 1070015,
      Appoint: '07/05/2014',
      doctorId: 10351
    },
    {
      idDate: 2,
      firstName: "David",
      lastName: "Castrp",
      userId: 1070015,
      Appoint: '06/04/2014',
      doctorId: 10351
    },

  ]

