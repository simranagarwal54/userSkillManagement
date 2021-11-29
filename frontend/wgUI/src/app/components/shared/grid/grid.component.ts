import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent {
  //configurable column names and types 
  @Input() gridData: any;
  @Input() colData: any;
  @Input() dataService: any;
  constructor() { 
    
  }
 

  ngOnInit(): void {
  }

}
