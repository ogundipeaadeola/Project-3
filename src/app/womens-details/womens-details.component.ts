import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { womensproduct, womensproducts } from '../womensproducts';
import { CartService } from '../cart.service';
import { WishlistService } from '../wishlist.service';

@Component({
  selector: 'app-womens-details',
  templateUrl: './womens-details.component.html',
  styleUrls: ['./womens-details.component.css']
})
export class WomenDetailsComponent implements OnInit {
  
  addToCart(womensproduct: womensproduct) {
    this.cartService.addToCart(womensproduct);
    window.alert('Your product has been added to the cart!');
  }
  addToWishlist(womensproduct: womensproduct) {
    this.wishlistService.addToWishlist(womensproduct);
    window.alert('Your product has been added to your wishlist!')
  }

  
  womensproduct: womensproduct | undefined;

  constructor(private route: ActivatedRoute,
    private cartService: CartService,
    private wishlistService: WishlistService)

    { }

  ngOnInit() {
 
    const routeParams = this.route.snapshot.paramMap;
    const womensproductIdFromRoute = Number(routeParams.get('womensproductId'));
  
    this.womensproduct = womensproducts.find(womensproduct => womensproduct.id === womensproductIdFromRoute);
  }
}
