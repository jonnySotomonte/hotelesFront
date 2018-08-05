import { Component, OnInit } from '@angular/core';
import { HotelesService } from './service/hoteles.service';
import { HotelesInfo } from './models/hoteles-info.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'hotelesFront';
  hoteles: Array<HotelesInfo> = new Array();

  constructor(private service: HotelesService ){
  }

  ngOnInit() {
    this.service.getAllHotels().subscribe(response => {
      this.hoteles = response;
      
    })
  }
}
