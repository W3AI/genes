import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Gene } from '../logic/Gene';
import { GeolocationService } from "../geolocation.service";
import { TastingRating } from '../logic/TastingRating';
import { DataService } from '../data.service';

@Component({
  selector: 'app-gene',
  templateUrl: './gene.component.html',
  styleUrls: ['./gene.component.css']
})
export class GeneComponent implements OnInit {

  gene : Gene;
  tastingEnabled : boolean = false;
  types = ["manual", "scripted", "autopilot"];

  constructor(private route: ActivatedRoute,
              private geolocation: GeolocationService,
              private router: Router,
              private data: DataService
            ) { }

  routingSubscription: any;

  tastingRatingChanged(checked: boolean) {
    if (checked) {
      this.gene.tastingRating = new TastingRating();
    } else {
      this.gene.tastingRating = null;
    }
  }

  cancel() {
    this.router.navigate(["/"]);
  }

  save() {
    this.data.save(this.gene, result => {
      if (result) {
        this.router.navigate(["/"]);
      }
    });
  }

  ngOnInit() {
    this.gene = new Gene();
    this.routingSubscription = 
      this.route.params.subscribe(params => {
        console.log(params["id"]);
        if (params["id"]) {
          this.data.get(params["id"], response => {
            this.gene = response;
            if (this.gene.tastingRating) {
              this.tastingEnabled = true;
            }
          });
        }
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
