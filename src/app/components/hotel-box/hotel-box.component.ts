import { Component, OnInit, Input } from '@angular/core';
import { HotelesInfo } from '../../models/hoteles-info.model';
import { Amenities } from '../../enums/amenities.enum';
import { jsonpFactory } from '../../../../node_modules/@angular/http/src/http_module';

@Component({
  selector: 'app-hotel-box',
  templateUrl: './hotel-box.component.html',
  styleUrls: ['./hotel-box.component.css']
})
export class HotelBoxComponent implements OnInit {

  @Input('hotel') hotel: HotelesInfo;
  amenities: any;

  constructor() { }

  ngOnInit() {
    this.amenities = this.hotel.amenities;
  }

}
