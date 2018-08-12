import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getList(callback) {
    // TODO: Change with a real Web Service
    const list = [
      new Gene("Double Espresso", "Sunny Cafe", new PlaceLocation("123 Market St", "San Francisco")),
      new Gene("Caramel Americano", "Starcoffee", new PlaceLocation("Gan Via 34", "Madrid"))
    ];
    callback(list);
  }

  save(coffee, callback) {
    // TODO: Change with a real Web Service
    callback(true);
  }

}
