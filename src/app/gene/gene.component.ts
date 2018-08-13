import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Gene } from '../logic/Gene';
import { GeolocationService } from "../geolocation.service";

@Component({
  selector: 'app-gene',
  templateUrl: './gene.component.html',
  styleUrls: ['./gene.component.css']
})
export class GeneComponent implements OnInit {

  gene : Gene;
  types = ["manual", "automatic", "bot"];

  constructor(private route: ActivatedRoute,
              private geolocation: GeolocationService) { }

  routingSubscription: any;

  ngOnInit() {
    this.gene = new Gene();
    this.routingSubscription = 
      this.route.params.subscribe(params => {
        console.log(params["id"]);
      });

    this.geolocation.requestLocation(location => {
      if (location) {
        this.gene.location.latitude = location.latitude;
        this.gene.location.longitude = location.longitude;
      }
    })

  }

  ngOnDestroy() {
    this.routingSubscription.unsubscribe();
  }

}
