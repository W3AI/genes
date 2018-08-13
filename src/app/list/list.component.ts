import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";
import { Gene } from '../logic/Gene';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  list : [Gene]

  constructor(private data: DataService,
              private router: Router) { }

  goDetails(gene: Gene) {
    this.router.navigate(["/gene", gene._id])
  }

  ngOnInit() {
    this.data.getList(list => {
      this.list = list;
    })
  }

}
