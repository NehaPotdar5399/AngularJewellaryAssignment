import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  eData: any;
  bData: any;
  nData: any;
  rData: any;

  constructor( private dataService:RestService) { }

  ngOnInit(): void {

    this.dataService.getEarrings().subscribe(
      val =>
      this.eData=val
      // console.log(val)
    );    
    this.dataService.getBracelates().subscribe(
      val =>
      this.bData=val
    );    
    this.dataService.getNacklaces().subscribe(
      val =>
      this.nData=val
    );    this.dataService.getRings().subscribe(
      val =>
      this.rData=val
    );

  }

}
