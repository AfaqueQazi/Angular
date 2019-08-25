import { Component } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {  
displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];


public rows: Array<{position: number, name: string, weight: number, symbol: string}> = [];
  position: number;
dataSource = this.rows;
  name: string;
  weight: number;
  symbol: string;
buttonClicked() {
  this.rows.push( {position: this.position, name: this.name, weight: this.weight, symbol:this.symbol } );
}
}