import { Component, OnInit } from '@angular/core';
import { JarwisService } from '../../services/jarwis.service';
import { TokenService } from '../../services/token.service';

import { Router } from '@angular/router';
import { EventListener } from '@angular/core/src/debug/debug_node';
import { SharedService } from '../../services/shared.service';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public loggedIn: boolean;
  public form = {
    zip: null,
   state:null,
     address: null,
    country: null,
    status:'uncomfirmed',
    total:null,
    product:null
  };
defualtQuantity:number=1;
productAddedToCart;
allTotal:number;
public nums:number=0;

 // nums: number;
 public message = null;
 public error = null;
 public orderItem;
  // Shared: any;
  constructor(private Token: TokenService, private Auth: AuthService,
    private Jarwis: JarwisService,private Shared: SharedService,private router: Router) { }
    public response:any;
public prod;
    onSubmit() {
      this.orderItem=[];
      for (let i in this.productAddedToCart)
      {
        this.orderItem.push({
          product_id:this.productAddedToCart[i].id,
          user_id:this.productAddedToCart[i].user_id,
          qty:this.productAddedToCart[i].Quantity
        });
      }
      this.form.total=this.allTotal;
      this.prod=this.orderItem;
      this.form.product=this.prod;
      //this.form.shop_id=this.responseshop.shopid.id
      //this.form.user_id=this.response.id
     //console.log( this.orderItem)
      console.log(this.form)
      this.Jarwis.checkout(this.form).subscribe(
         data => this.handleResponse(data),
         error => this.handleError(error)
      );
    }
    handleResponse(data) {
      this.message=data.message;
      console.log(data);
      this.Jarwis.removeAllProductFromCart();
     // this.Token.handle(data.access_token);
      //this.router.navigateByUrl('/cart');
    }
    handleError(error) {
      this.error = error.error.errors.cat_name[0];
    //console.log(error.error.errors.cat_name[0]);
    
    }
  displaycart(){
 this.Jarwis.cart().subscribe(
   data=>{
   this.response = data;
   //console.log(this.response)
 })
 
}
displayuser(){
this.Jarwis.profile().subscribe(
 data=>{
 //console.log(data);
 this.response = data;
// console.log(this.response.email);
})

}
  ngOnInit() {
    
    this.Auth.authStatus.subscribe(value => this.loggedIn = value);
    this.displayuser()
    this.nums +=1;
   // let count=this.Jarwis.getproductFromCart();
    //console.log(count)
    // let obj =eval('('+count+')')
    // console.log(obj)
  // let objCount=0;
  // for(obj in obj)
  //   objCount++
  //   console.log(obj)
  
    //console.log(this.nums)
    this.displaycart();
    this.productAddedToCart=this.Jarwis.getproductFromCart();
    let cartcount=this.productAddedToCart.length;
    console.log(cartcount);
    for(let i in this.productAddedToCart){
      this.productAddedToCart[i].Quantity =1;
    }
    this.Jarwis.removeAllProductFromCart();
    this.Jarwis.addproductToCart(this.productAddedToCart);
    this.calculteAllTotal(this.productAddedToCart);
   //console.log(this.calculteAllTotal);
  
  }
  onAddQuantity(product){
    this.productAddedToCart=this.Jarwis.getproductFromCart();
    this.productAddedToCart.find(p=>p.id==product.id).Quantity=product.Quantity+1;
    this.Jarwis.removeAllProductFromCart();
    this.Jarwis.addproductToCart(this.productAddedToCart);
    this.calculteAllTotal(this.productAddedToCart);
  }
  onRemoveQuantity(product){
    this.productAddedToCart=this.Jarwis.getproductFromCart();
    this.productAddedToCart.find(p=>p.id==product.id).Quantity=product.Quantity-1;
    this.Jarwis.removeAllProductFromCart();
    this.Jarwis.addproductToCart(this.productAddedToCart);
    this.calculteAllTotal(this.productAddedToCart);
  }
  remove(id:string){
    // this.productAddedToCart=this.Jarwis.getproductFromCart();
   // console.log(id);
    this.productAddedToCart.splice(id, 1)
    if(this.productAddedToCart.length){
      localStorage.setItem('product', JSON.stringify(this.productAddedToCart));
    } else { 
      localStorage.setItem('product', null);
    }
    this.calculteAllTotal(this.productAddedToCart);
    
  }
  calculteAllTotal(allItems){
    //console.log(this.calculteAllTotal);
 
let total=0;
for(let i in allItems){
  total=total+(allItems[i].Quantity*allItems[i].price);
}
this.allTotal=total;
console.log(this.allTotal);

  }
}
