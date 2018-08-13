import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";
import { Gene } from '../logic/Gene';
import { Router } from '@angular/router';
import { GeolocationService } from '../geolocation.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  list : [Gene]

  constructor(private data: DataService,
              private router: Router,
              private geolocation: GeolocationService) { }

  goDetails(gene: Gene) {
    this.router.navigate(["/gene", gene._id])
  }

  goMap(gene: Gene) {
    const mapURL = this.geolocation.getMapLink(gene.location);
    location.href = mapURL;
  }

  share(gene: Gene) {
    const shareText = `I got this skill at a training class in ${gene.place} and for me it's a ${gene.rating} skill`;
    if ('share' in navigator) {
      navigator["share"]({
        title: gene.name,
        text: shareText,
        url: window.location.href
      }).then( () => console.log("shared")).catch( () => console.log("error sharing"));
    } else {
      const shareURL = `whatsapp://send?text=${encodeURIComponent(shareText)}`;
      location.href = shareURL;
    }
  }

  ngOnInit() {
    this.data.getList(list => {
      this.list = list;
    })
  }

}
