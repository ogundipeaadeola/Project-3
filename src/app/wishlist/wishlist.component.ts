import { Component } from '@angular/core';
import { WishlistService } from '../wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent {
  
  items = this.wishlistService.getItems();

  constructor(
    private wishlistService: WishlistService
  ) { }

}
