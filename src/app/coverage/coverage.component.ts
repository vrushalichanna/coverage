import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-coverage',
  templateUrl: './coverage.component.html',
  styleUrls: ['./coverage.component.css']
})
export class CoverageComponent implements OnInit {
//   @Input() premium:number;
//   @Output() premiumAmount = new EventEmitter<number>(); 
// @Output() covrageRate = new EventEmitter<any>();
isActive:Boolean = true;
@Input() premium:number;
@Output() premiumAmount=new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }

  getCovrageRate(){
this.premiumAmount.emit(this.premium);
  }

  onClick(){
    
    this.premiumAmount.emit(this.premium);
  }
  checkBoxBtn(){
    this.isActive = false;
  }

  public icon = 'highlight_off'; 

public toggleIcon() {
    if (this.icon === 'highlight_off') {
        this.icon = 'anotherIcon';
    } else {
        this.icon = 'highlight_off'
    }
}
}
