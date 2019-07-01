import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  constructor() {
    
   }

  ngOnInit() {
  }

  n1 = 0;
  n2 = 0;
  
  plus(n1,n2){
    return n1 + n2;
  }

  minus(n1,n2){
    return n1 - n2;
  }

  times(n1,n2){
    return n1 * n2;
  }

  divide(n1,n2){
    return n1 / n2;
  }
}

