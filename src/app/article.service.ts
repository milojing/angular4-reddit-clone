import { Injectable } from '@angular/core';
import {Article} from './article';
import {Http, URLSearchParams} from '@angular/http';
import {Observable, BehaviorSubject} from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import {environment} from '../environments/environment';


interface ArticleSortFn {
  (a: Article, b:Article): number;
}

interface ArticleSortOrderFn {
  (direction: number) : ArticleSortFn;
}

const sortByTime: ArticleSortOrderFn =
(direction: number) => (a:Article, b:Article) => {
  return direction * (b.publishedAt.getTime() - a.publishedAt.getTime());
}

const sortByVotes: ArticleSortOrderFn =
(direction: number) => (a:Article, b:Article) => {
  return direction * (b.votes - a.votes);
}

const sortFns = {
  'Time': sortByTime,
  'Votes': sortByVotes
}

@Injectable()
export class ArticleService {
  private _articles: BehaviorSubject<Article[]> =
  new BehaviorSubject<Article[]>([]);

  private _sortByDirectionSubject:
  BehaviorSubject<number> = new BehaviorSubject<number>(1);
  private _sortByFilterSubject:
  BehaviorSubject<ArticleSortOrderFn> = new BehaviorSubject<ArticleSortOrderFn>(sortByTime);

  public articles: Observable<Article[]> = this._articles.asObservable();
  public orderedArticles: Observable<Article[]>;
  // why here use asObservable _articles self is also Observable
  // reason is to hide the sequence, since subject is powerful als normal
  //Observable, it can call next function to broadcast next event
  constructor(private http: Http) {
    this.orderedArticles = Observable.combineLatest(
      this._articles,
      this._sortByFilterSubject,
      this._sortByDirectionSubject,
    ).map(([articles, sorter, direction])=> {
      return articles.sort(sorter(direction));
    })
  }

  public sortBy(
    filter: string,
    direction: number
  ): void{
    this._sortByDirectionSubject.next(direction);
    this._sortByFilterSubject.next(sortFns[filter]);
  }
  public getArticles(): void {
    this._makeHttpRequest('/v1/articles', 'reddit-r-all')
        .map(json => json.articles)
        .subscribe(articlesJSON => {
          const articles = articlesJSON
            .map(articlejson => Article.fromJSON(articlejson));
            this._articles.next(articles);
        })
  }
  private _makeHttpRequest(
    path: string,
    sourceKey: string
  ): Observable<any> {
    let params = new URLSearchParams();
    params.set('apiKey', environment.newsApiKey);
    params.set('source', sourceKey);

    return this.http.get(`${environment.baseUrl}${path}`, {
      search: params
    })
    .map(resp=> resp.json());
 }

}
