import { Component, OnInit } from '@angular/core';
import { JarwisService } from '../../services/jarwis.service';
import { TokenService } from '../../services/token.service';
import { SharedService } from '../../services/shared.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  cartItemCount: any;
  // closeAlert(arg0: any): any {
  //   throw new Error("Method not implemented.");
  // }
  public form = {
    product_name: null,
    price:null,
     qty: 1,
    pro_id: null,
    productfile:null
  };
  image: string;
 // alerts: Alert[];
  //  alerts: any;
  constructor(private Token: TokenService, 
    private Jarwis: JarwisService,
    private Shared: SharedService,
    private router: Router,
    public actRoute: ActivatedRoute){ }
    public productfile;
  public response:any;
  public response1:any;
  public response2:any;
  public responseshop:any;
  public message = null;
  public error = null;
  cat_id: any;
cat_name:any;
//created_at: any;
description: any;
id: any;
name: any;
price:any;
product_name: any;
//productfile: any;
role: any;

  public warning;
  public sdet;
  public cartcount;
  public productAddedToCart;
  OnAddCart(product){
 //console.log(product)
this.productAddedToCart=this.Jarwis.getproductFromCart();
// this.cartItemCount=this.productAddedToCart.length;
// this.Shared.updateCartCount(this.cartItemCount);
//console.log(this.cartItemCount)
if(this.productAddedToCart==null)
{
  this.productAddedToCart=[];
  this.productAddedToCart.push(product);
  this.Jarwis.addproductToCart(this.productAddedToCart);
//   this.alerts.push({
// id:1,
// type:'success',
// message:'product added to cart.'
//   });
  setTimeout(()=>{
    this.message='product added to cart.'
  //this.closeAlert(this.alerts);
},1000);
  
}
else{
  let tempProduct=this.productAddedToCart.find(p=>p.id==product.id);
  console.log(tempProduct)
  if(tempProduct==null){
    this.productAddedToCart.push(product);
    this.Jarwis.addproductToCart(this.productAddedToCart);
  //   this.alerts.push({
  // id:1,
  // type:'success',
  // message:'product added to cart.'
  //   });
    setTimeout(()=>{
      this.message='product added to cart.'
    //this.closeAlert(this.alerts);
  },1000);
    // setTimeout(()=>{
    //   this.closeAlert(this.alerts);
    // },3000);
  }
  else{
    // this.alerts.push({
    //   id:2,
    //   type:'warming',
    //   message:'product already exist in cart.'
    //     });
        setTimeout(()=>{
          this.warning='product already exist in cart.'
        //this.closeAlert(this.alerts);
      },1000);
  }
}
this.cartItemCount=this.productAddedToCart.length;
this.Shared.updateCartCount(this.cartItemCount);
//console.log(this.productAddedToCart)
}
// public closeAlert(alert:any){
//   const index:number =this.alerts.indexOf(alert);
//   this.alerts.splice(index,1);
// }
// onSubmit() {
//   // this.form.cat_id=this.responsecat.id
//   this.form.product_name=this.sdet.product_name
//   this.form.price=this.sdet.price
//   this.form.pro_id=this.sdet.id
//   this.form.productfile=this.sdet.productfile
//   console.log(this.form)
//   this.Jarwis.addtocart(this.form).subscribe(
//      data => this.handleResponse(data),
//      error => this.handleError(error)
//   );
// }
// handleResponse(data) {
//   this.message=data.message;
//   console.log(data);
//  // this.Token.handle(data.access_token);
//   this.router.navigateByUrl('/cart');
// }
// handleError(error) {
//   this.error = error.error.errors.cat_name[0];
// //console.log(error.error.errors.cat_name[0]);

// }
  ngOnInit() {

    // this.displayshopdetails();
    this.actRoute.paramMap.subscribe((params => {
    console.log(params)
    let id = params.get('id');
       console.log(id)
    this.Jarwis.productdetail(id).subscribe(data=>{
    this.response = data;
    this.sdet=this.response[0];
    this.name= this.sdet.name
    this.product_name=this.sdet.product_name
    this.price=this.sdet.price
    this.cat_name=this.sdet.cat_name
    this.description=this.sdet.description
    this.image='http://localhost/newsofine/backend/public/upload/uploads/'+this.sdet.productfile
 //console.log(this.sdet);
  })
  this.Jarwis.productdetail1(id).subscribe(data=>{
    this.response1 = data;
    //this.image='http://localhost/newsofine/backend/public/upload/uploads/'+this.response1.productfile
    //this.sdet=this.response1.shop[0];
  //console.log(this.response1);
  })
  this.Jarwis.productdetail2(id).subscribe(data=>{
    this.response2 = data;
    //this.sdet=this.response2.shop[0];
  //console.log(this.response2);
  })
     // console.log(this.Jarwis.shop(id));
    }));

//     this.productAddedToCart=this.Jarwis.getproductFromCart();
// this.cartItemCount=this.productAddedToCart.length;
// //this.Shared.updateCartCount(this.cartItemCount);
// console.log(this.cartItemCount)
   
  }
  navigate(id){
    this.router.navigate(['product-details/'+id+''])
  }
}
// export interface Alert{
//   id:number;
//   type:string;
//   message:string;
//   }
