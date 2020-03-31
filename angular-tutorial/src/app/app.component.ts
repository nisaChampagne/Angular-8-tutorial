// imports 
import { Component } from '@angular/core';


// decorator with metadata
@Component({
  selector: 'app-root', // what you would import into .html file
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

// component logic
export class AppComponent {
  title = 'angular-tutorial';
}
