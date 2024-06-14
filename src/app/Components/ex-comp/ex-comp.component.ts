import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex-comp',
  templateUrl: './ex-comp.component.html',
  styleUrls: ['./ex-comp.component.scss']
})
export class ExCompComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  stars=[1,2,3,4,5]
  alreadyGivenRating:number=0;
  presentGivingRating:number=0;

  updateRating(num:number){ 
    this.presentGivingRating=num;
  }

}
