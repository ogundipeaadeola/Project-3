import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { mensproduct, mensproducts } from '../mensproducts';
import { CartService } from '../cart.service';
import { WishlistService } from '../wishlist.service';

@Component({
  selector: 'app-mens-details',
  templateUrl: './mens-details.component.html',
  styleUrls: ['./mens-details.component.css']
})
export class MensDetailsComponent implements OnInit{

  addToCart(mensproduct: mensproduct) {
    this.cartService.addToCart(mensproduct);
    window.alert('Your product has been added to the cart!');
  }
  addToWishlist(mensproduct: mensproduct) {
    this.wishlistService.addToWishlist(mensproduct);
    window.alert('Your product has been added to your wishlist!')
  }

  
  mensproduct: mensproduct | undefined;

  constructor(private route: ActivatedRoute,
    private cartService: CartService,
    private wishlistService: WishlistService)

    { }

  ngOnInit() {
 
    const routeParams = this.route.snapshot.paramMap;
    const mensproductIdFromRoute = Number(routeParams.get('mensproductId'));
  
    this.mensproduct = mensproducts.find(mensproduct => mensproduct.id === mensproductIdFromRoute);
  }
}
