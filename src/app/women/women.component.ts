import { Component } from '@angular/core';
import { womensproducts } from '../womensproducts';



@Component({
  selector: 'app-women',
  templateUrl: './women.component.html',
  styleUrls: ['./women.component.css']
})
export class WomenComponent {

  womensproduct = [...womensproducts];


}