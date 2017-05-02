import { Component, OnInit, Input } from '@angular/core';
import { Observable} from 'rxjs';
import {Article} from '../article';
import {ArticleService} from '../article.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {
 private articles: Observable<Article[]>;
  constructor(
    private articleService:ArticleService
  ) {
    this.articles = articleService.articles;
  }

  ngOnInit() {
    this.articleService.getArticles();
  }

}
