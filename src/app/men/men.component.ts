import { Component } from '@angular/core';
import { mensproducts } from '../mensproducts';

@Component({
  selector: 'app-men',
  templateUrl: './men.component.html',
  styleUrls: ['./men.component.css']
})
export class MenComponent {

  mensproduct = [...mensproducts]

}
