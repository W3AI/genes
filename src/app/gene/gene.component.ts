import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-gene',
  templateUrl: './gene.component.html',
  styleUrls: ['./gene.component.css']
})
export class GeneComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  routingSubscription: any;

  ngOnInit() {
    this.routingSubscription = 
      this.route.params.subscribe(params => {
        console.log(params["id"]);
      })
  }

  ngOnDestroy() {
    this.routingSubscription.unsubscribe();
  }

}
