import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  recipe: boolean = true;
  shopping: boolean = false;

  getFeature(e) {
    if (e === 'recipe') {
      this.recipe = true;
      this.shopping = false;
    } else if (e === 'shopping') {
      this.shopping = true;
      this.recipe = false;
    }
  }
}
