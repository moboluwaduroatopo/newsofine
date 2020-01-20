import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RequestResetComponent } from './components/password/request-reset/request-reset.component';
import { ResponseResetComponent } from './components/password/response-reset/response-reset.component';
import { BeforeLoginService } from './services/before-login.service';
import { AfterLoginService } from './services/after-login.service';
import { AddproductComponent } from './components/addproduct/addproduct.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { AddshopComponent } from './components/addshop/addshop.component';
import { ShopComponent } from './components/shop/shop.component';
import { AddshopdetailsComponent } from './components/addshopdetails/addshopdetails.component';
import { ShopdetailsComponent } from './components/shopdetails/shopdetails.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { BuyerComponent } from './components/buyer/buyer.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import {ProductDetailsComponent} from './components/product-details/product-details.component';
import { StoriesComponent } from './comments/stories/stories.component';
import { StoryComponent } from './comments/story/story.component';
import { RepliesComponent } from './comments/replies/replies.component';


const appRoutes: Routes = [
 {
    path: '',
    component: HomeComponent
    
  },
  {
    path: 'shop/:id',
    component: ShopComponent,
  },
  {
    path: 'stories',
    component: StoriesComponent,
  },
  {
    path: 'story/:id',
    component: StoryComponent,
  },
  {
    path: 'replies/:id',
    component: RepliesComponent,
  },
  {
    path: 'buyer',
    component: BuyerComponent,
    canActivate: [AfterLoginService]
  },
  {
    path: 'product-details/:id',
    component: ProductDetailsComponent,
  },
  {
    path: 'shopdetails/:id',
    component: ShopdetailsComponent,
  },
  {
    path: 'addproduct',
    component: AddproductComponent,
    // canActivate: [AfterLoginService]
  },
  {
    path: 'cart',
    component: CartComponent,
    // canActivate: [AfterLoginService]
  },
  {
    path: 'checkout',
    component: CheckoutComponent,
    //  canActivate: [AfterLoginService]
  },
  {
    path: 'addcat',
    component: CategoriesComponent,
    canActivate: [AfterLoginService]
  },
  {
    path: 'addshop',
    component: AddshopComponent,
    canActivate: [AfterLoginService]
  },
  {
    path: 'addshopdetails',
    component: AddshopdetailsComponent,
    canActivate: [AfterLoginService]
  },
  
  {
    path: 'login',
    component: LoginComponent,
    // canActivate: [BeforeLoginService]
  },
  {
    path: 'signup',
    component: SignupComponent,
     canActivate: [BeforeLoginService]
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AfterLoginService]
  },
  {
    path: 'request-password-reset',
    component: RequestResetComponent,
    canActivate: [BeforeLoginService]
  },
  {
    path: 'response-password-reset',
    component: ResponseResetComponent,
    canActivate: [BeforeLoginService]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
