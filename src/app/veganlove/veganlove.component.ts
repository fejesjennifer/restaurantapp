import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-veganlove',
  templateUrl: './veganlove.component.html',
  styleUrls: ['./veganlove.component.scss']
})
export class VeganloveComponent implements OnInit {
 
  lat: number = 47.497912;
  lng: number = 19.040235;
  zoom: number = 20;

  constructor() { }

  ngOnInit() {
  }

}
