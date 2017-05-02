import { Component, Input } from '@angular/core';
import {Article} from './article';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  articles: Article[];

  constructor() {
    this.articles = [
      new Article(
      'The Angular 2 screencast',
       '1',
       10
    ),
    new Article(
    'The Angular 2 screencast',
     '2'
   ),
    new Article(
    'The Angular 2 screencast',
     '3'
  ),
    new Article(
    'The Angular 2 screencast',
     '4'
    ),]
  }
}
