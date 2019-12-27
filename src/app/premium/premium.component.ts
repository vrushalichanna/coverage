import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-premium',
  templateUrl: './premium.component.html',
  styleUrls: ['./premium.component.css']
})
export class PremiumComponent implements OnInit {
  @Input() addOnPremium:number;
  @Output() addOnPremiumAmount = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }

  addpremium(){

  }
  onClick(){
    this.addOnPremiumAmount.emit(this.addOnPremium);
  }
}
