import { Component, OnInit, Input } from '@angular/core';
import { Observable} from 'rxjs';
import {Article} from '../article';
import { ActivatedRoute } from '@angular/router';
import {ArticleService} from '../article.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {
 private articles: Observable<Article[]>;
  constructor(
    private articleService:ArticleService,
    private activeRoute: ActivatedRoute
  ) {
    this.articles = articleService.orderedArticles;
  }

  ngOnInit() {
    this.activeRoute.params.subscribe(params => {
      const sourceKey = params['sourceKey'];
      this.articleService.updateArticles(sourceKey);

    })
  }

}
