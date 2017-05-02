import { Component, Input } from '@angular/core';
import {Article} from './article';
import {ArticleService} from './article.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  articles: Article[];

  constructor(
    private articleService:ArticleService
  ) {
    this.articles = articleService.getArticles();
  }
}
