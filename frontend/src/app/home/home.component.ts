import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JarwisService } from '../services/jarwis.service';
import { AddproductComponent } from '../components/addproduct/addproduct.component';
import { Router } from '@angular/router';
// import {NgxPaginationModule} from 'ngx-pagination';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  resp: Object;
  respo: Object;

  constructor( private http: HttpClient,private router: Router, private Jarwis: JarwisService) { }
 public profile={
   email:null,
   password:null
 }
//  private info : any;
 public response:any;
 public res:any;
  ngOnInit() {
     this.displaycat()
     this.displaytailor()
     this.displayproduct()
     this.displayshopt()
  }
displaycat(){
  this.Jarwis.catid().subscribe(data=>{
    this.respo = data;
   console.log(this.respo);
  })
  
}
displayproduct(){
  this.Jarwis.allproduct().subscribe(data=>{
    this.response = data;
   // console.log(this.response);
  })
  
}
displaytailor(){
  this.Jarwis.tailor().subscribe(data=>{
    this.res = data;
    console.log(this.res);
  })
  
}
displayshopt(){
  this.Jarwis.shopt().subscribe(data=>{
    this.resp = data;
    console.log(this.resp);
  })
  
}
navigate(id){
  this.router.navigate(['product-details/'+id+''])
}
}
