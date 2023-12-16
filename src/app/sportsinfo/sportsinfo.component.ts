import { Component } from '@angular/core';
import { sportsproducts } from '../sportsproducts';



@Component({
  selector: 'app-sportsinfo',
  templateUrl: './sportsinfo.component.html',
  styleUrls: ['./sportsinfo.component.css']
})
export class SportsinfoComponent {

  sportsproduct = [...sportsproducts];


  }


