import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service'

@Component({
  selector: 'app-list-component',
  templateUrl: './list-component.component.html',
  styleUrls: ['./list-component.component.sass']
})
export class ListComponentComponent implements OnInit {


  clickCounter = 0
  name: string = ''

  brews: Object;

  constructor(private _http: HttpService) { } // dependency injection

  ngOnInit(): void { // lifecycle hook, runs when  component is loaded
    this._http.getBeer().subscribe(data => {
      this.brews = data;
      console.log(this.brews)
    });
  }
  countClick(){
    this.clickCounter += 1
  }

  countNegClick(){
    this.clickCounter -= 1
  }

}
