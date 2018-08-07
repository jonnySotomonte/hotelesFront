import { Component, OnInit, Input } from '@angular/core';
import { Amenities } from '../../enums/amenities.enum';

@Component({
  selector: 'app-amenities',
  templateUrl: './amenities.component.html',
  styleUrls: ['./amenities.component.css']
})
export class AmenitiesComponent implements OnInit {

  @Input('amenities') amenities : Amenities []; 

  constructor() { }

  ngOnInit() {

  }

}
