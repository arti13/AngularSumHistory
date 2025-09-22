import { Component } from '@angular/core';

import { FormsModule } from '@angular/forms'; 
import { NgIf, NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [FormsModule, NgIf, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'SumHistoryNumber';
  
  num1: number = 0;
  num2: number = 0;
  result: number | null = null;
  history: number[] = [];


  calculateSum() {
    this.result = this.num1 + this.num2;
    this.history.push(this.result);
  }

}
