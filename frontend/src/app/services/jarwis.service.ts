import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class JarwisService {
  // public productdetail:any;
  private baseUrll = 'http://localhost/newsofine/sofinelarangular-master/backend/backend/public';
  private baseUrl = 'http://localhost/newsofine/backend/public/api';
  public det: any;
  constructor(private http: HttpClient) { }
 
  signup(data) {
    return this.http.post(`${this.baseUrl}/signup`, data)
  }

  login(data) {
    return this.http.post(`${this.baseUrl}/login`, data)
  }
  product(data) {
    return this.http.post(`${this.baseUrl}/product`, data)
  }
  stories(data) {
    return this.http.post(`${this.baseUrl}/stories`, data)
  }
  addstory(data) {
    return this.http.post(`${this.baseUrl}/story`,data)
  }
 addshop(data) {
    return this.http.post(`${this.baseUrl}/addshop`, data)
  }
  addtocart(data) {
    return this.http.post(`${this.baseUrl}/cart_add`, data)
  }
  addshopdetails(data) {
    return this.http.post(`${this.baseUrl}/addshopdetails`, data)
  }
  addpost(data) {
    return this.http.post(`${this.baseUrl}/post`, data)
  }
  displaystories() {
    return this.http.get(`${this.baseUrl}/stories`)
  }
  
  profile() {
    return this.http.get(`${this.baseUrl}/me`,{headers:{
      Authorization:`Bearer ${localStorage.token}`
    }})
  }
  addcat(data) {
    return this.http.post(`${this.baseUrl}/addcat`,data,{headers:{
      Authorization:`Bearer ${localStorage.token}`
    }})
  }
  checkout(data) {
    return this.http.post(`${this.baseUrl}/checkout`,data,{headers:{
      Authorization:`Bearer ${localStorage.token}`
    }})
  }
  shop(id:string) {
    return this.http.get(`${this.baseUrl}/shop/${id}`)
  }
  shopcat(id:string) {
    return this.http.get(`${this.baseUrl}/shopcat/${id}`)
  }
  story(id:string) {
    return this.http.get(`${this.baseUrl}/story/${id}`)
  }
  post(id:string) {
    return this.http.get(`${this.baseUrl}/post/${id}`)
  }
  allproduct() {
    return this.http.get(`${this.baseUrl}/product`)
  }
  cart() {
    return this.http.get(`${this.baseUrl}/cart-show`)
  }
  catshop() {
    return this.http.get(`${this.baseUrl}/shopcat`)
  }
  tailorcat() {
    return this.http.get(`${this.baseUrl}/tailorcat`)
  }
  shopdetails(id:string) {
    return this.http.get(`${this.baseUrl}/shopdetails/${id}`)
  }
  catid() {
    return this.http.get(`${this.baseUrl}/catid`)
  }
  shopt() {
    return this.http.get(`${this.baseUrl}/shopt`)
  }
  tailor() {
    return this.http.get(`${this.baseUrl}/tailor`)
  }
   productdetails() {
    return this.http.get(`${this.baseUrl}/productdetail`)
  }
  productdetail(id:string) {
    return this.http.get(`${this.baseUrl}/productdetails/${id}`)
  }
  productdetail1(id:string) {
    return this.http.get(`${this.baseUrl}/productdetails1/${id}`)
  }
  productdetail2(id:string) {
    return this.http.get(`${this.baseUrl}/productdetails2/${id}`)
  }
  // productdetail(data):Observable<MyNewInterface[]> {
  //   return this.http.get(`${this.baseUrl}/productdetail`, data)
  // }
  getid(data) {
     //console.log(data.user);
    this.det = data;
  }
//   productdetail(data) {
//     //console.log(data.user);
//    this.det = data;
//  }
  sendPasswordResetLink(data) {
    return this.http.post(`${this.baseUrl}/sendPasswordResetLink`, data)
  }
  
  changePassword(data) {
    return this.http.post(`${this.baseUrl}/resetPassword`, data)
  }
  addproductToCart(products:any){
// this.productdetail= u;
localStorage.setItem("product",JSON.stringify(products));
}
getproductFromCart(){
  // this.productdetail= u;
  return JSON.parse(localStorage.getItem("product"));
  }
  removeAllProductFromCart(){
    return localStorage.removeItem('product');
  }
  
updateprofile(data) {
  return this.http.post(`${this.baseUrl}/me`,data,{headers:{
    Authorization:`Bearer ${localStorage.token}`
  }})
}
//
}
