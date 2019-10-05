import { Injectable } from '@angular/core';

@Injectable()
export class DatesService {
    getEvents() {
        return eventsElemets
    }

    getEvent(id:number){
      return eventsElemets.find(event=> event.idDate === id)
    }
}
const eventsElemets = [
    {
      idDate: 1,
      firstName: "Pablo",
      lastName: "Cogua",
      userId: 1070015,
      Appoint: '07/05/2014',
      doctorId: 10351
    }
  ]

