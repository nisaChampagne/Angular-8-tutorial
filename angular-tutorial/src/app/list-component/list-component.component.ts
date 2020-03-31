import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-component',
  templateUrl: './list-component.component.html',
  styleUrls: ['./list-component.component.sass']
})
export class ListComponentComponent implements OnInit {


  clickCounter = 0
  name: string = ''
  constructor() { }

  ngOnInit(): void {
  }
  countClick(){
    this.clickCounter += 1
  }

  countNegClick(){
    this.clickCounter -= 1
  }

}
