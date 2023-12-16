
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { sportsproduct, sportsproducts } from '../sportsproducts';
import { CartService } from '../cart.service';
import { WishlistService } from '../wishlist.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  
  addToCart(sportsproduct: sportsproduct) {
    this.cartService.addToCart(sportsproduct);
    window.alert('Your product has been added to the cart!');
  }
  addToWishlist(sportsproduct: sportsproduct) {
    this.wishlistService.addToWishlist(sportsproduct);
    window.alert('Your product has been added to your wishlist!')
  }

  
  sportsproduct: sportsproduct | undefined;

  constructor(private route: ActivatedRoute,
    private cartService: CartService,
    private wishlistService: WishlistService)

    { }

  ngOnInit() {
 
    const routeParams = this.route.snapshot.paramMap;
    const sportsproductIdFromRoute = Number(routeParams.get('sportsproductId'));
  
    this.sportsproduct = sportsproducts.find(sportsproduct => sportsproduct.id === sportsproductIdFromRoute);
  }
}
