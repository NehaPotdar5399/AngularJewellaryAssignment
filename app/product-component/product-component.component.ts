import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RestService } from '../rest.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-product-component',
  templateUrl: './product-component.component.html',
  styleUrls: ['./product-component.component.css']
})
export class ProductComponentComponent implements OnInit {

  constructor(private rs:RestService, private router:ActivatedRoute) { }

 
  
  item:any;
  p_id:any
  
getSingleItem(id:any)
{
  return this.rs.getSingleJewellery(this.p_id).subscribe((data=>{
    this.item=data;
  }))

}

  ngOnInit(): void {
    this.p_id = this.router.snapshot.params['id']


  }

}
