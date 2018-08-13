import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Gene } from '../logic/Gene';

@Component({
  selector: 'app-gene',
  templateUrl: './gene.component.html',
  styleUrls: ['./gene.component.css']
})
export class GeneComponent implements OnInit {

  gene : Gene;
  types = ["manual", "automatic", "bot"];

  constructor(private route: ActivatedRoute) { }

  routingSubscription: any;

  ngOnInit() {
    this.gene = new Gene();
    this.routingSubscription = 
      this.route.params.subscribe(params => {
        console.log(params["id"]);
      })
  }

  ngOnDestroy() {
    this.routingSubscription.unsubscribe();
  }

}
