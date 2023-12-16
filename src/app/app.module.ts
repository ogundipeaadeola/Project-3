import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { ShippingComponent } from './shipping/shipping.component';
import { DiscountBarComponent } from './discount-bar/discount-bar.component';
import { WomenComponent } from './women/women.component';
import { MenComponent } from './men/men.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { SportsinfoComponent } from './sportsinfo/sportsinfo.component';
import { WomenDetailsComponent } from './womens-details/womens-details.component';
import { MensDetailsComponent } from './mens-details/mens-details.component';



@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: 'homepage', component: ProductListComponent },
      { path: '', redirectTo: '/homepage', pathMatch: 'full' },
      { path: 'products/:sportsproductId', component:
      ProductDetailsComponent },
      { path: 'cart', component: CartComponent },
      { path: 'shipping', component: ShippingComponent },
      { path: 'women', component: WomenComponent },
      { path: 'men', component: MenComponent },
      { path: 'wishlist', component: WishlistComponent },
      { path: 'productdetails', component: ProductDetailsComponent },
      { path: 'sportsinfo', component: SportsinfoComponent },
      { path: 'womens/:womensproductId' , component: WomenDetailsComponent },
      { path: 'mens/:mensproductId' , component: MensDetailsComponent },

     

    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductDetailsComponent,
    CartComponent,
    ShippingComponent,
    DiscountBarComponent,
    WomenComponent,
    MenComponent,
    WishlistComponent,
    SportsinfoComponent,
    WomenDetailsComponent,
    MensDetailsComponent
  
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }

