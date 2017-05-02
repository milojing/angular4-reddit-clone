import { Injectable } from '@angular/core';
import {Article} from './article';
import {Http, URLSearchParams} from '@angular/http';
import 'rxjs/add/operator/toPromise';

const baseUrl = 'https://newsapi.org';
const newsApiKey = 'f1518c9001e04e1b909093de30600345';

@Injectable()
export class ArticleService {

  constructor(private http: Http) { }

  public getArticles(): Promise<Article[]> {
    let params = new URLSearchParams();
    params.set('apiKey', newsApiKey);
    params.set('source', 'reddit-r-all');
    return this.http.get(`${baseUrl}/v1/articles`, {
      search: params
    })
    .toPromise()
    .then(resp=> {
      return resp.json();
    })
    .then(json => json.articles)
    .then(articles => {
      console.log('json ->', articles);
      const list = articles.map(article => new Article(article.title, article.description, article.urlToImage));
      return list;
    })
    .catch(err => {
      console.log('we got an error', err);
    });
 }

}
