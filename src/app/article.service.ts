import { Injectable } from '@angular/core';
import {Article} from './article';

@Injectable()
export class ArticleService {

  constructor() { }

  public getArticles(): Article[] {
    return [
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
