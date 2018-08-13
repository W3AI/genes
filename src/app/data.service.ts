import { Injectable } from '@angular/core';
import { Gene } from './logic/Gene';
import { PlaceLocation } from './logic/PlaceLocation';
import { Http } from "@angular/http";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: Http) { }

  public endpoint = "http://localhost:3000";

  get(geneId: string, callback) {
    this.http.get(`${this.endpoint}/genes/${geneId}`)
      .subscribe(response => {
        callback(response.json());
      })
  }

  getList(callback) {
    // Dummy data for UI Dev
    // const list = [
    //   new Gene("Double Espresso", "Sunny Cafe", new PlaceLocation("123 Market St", "San Francisco")),
    //   new Gene("Caramel Americano", "Starcoffee", new PlaceLocation("Gan Via 34", "Madrid"))
    // ];
    // callback(list);

    this.http.get(`${this.endpoint}/genes`)
      .subscribe(response => {
        console.log(response.json());
        callback(response.json());
      })
  }

  save(gene, callback) {
    if (gene._id) {
      // It's an update
      this.http.put(`${this.endpoint}/genes/${gene._id}`, gene)
        .subscribe(response => {
          callback(true);
        })
    } else {
      // It's an insert
      this.http.post(`${this.endpoint}/genes`, gene)
        .subscribe(response => {
          callback(true);
        })
    }
  }

}
