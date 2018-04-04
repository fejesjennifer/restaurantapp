import { Component, OnInit, ViewChild } from '@angular/core';
import { } from '@types/googlemaps';


@Component({
  selector: 'app-g-map',
  templateUrl: './g-map.component.html',
  styleUrls: ['./g-map.component.scss']
})
export class GMapComponent implements OnInit {

  @ViewChild('gmap') gmapElement: any;


  ngOnInit() {

  }

}
