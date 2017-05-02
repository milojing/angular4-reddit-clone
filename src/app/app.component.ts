import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  template: `
  <div id="sidebar">
    Sidebar will go here
    </div>
  `
})

export class SidebarComponent{}

@Component({
  selector: "app-article",
  template: `
    <div>
    <h2>{{article.title}}</h2>
    <p> {{article.description}}</p>
    </div>
  `
})
export class ArticleComponent {
  @Input() article: Object;
}

@Component({
  selector: 'app-root',
  template: `
     <div id="container">
     <app-sidebar></app-sidebar>
        <div id="content">
        <app-article
        *ngFor="let article of articles"
        [article]="article"></app-article>
          </div>
     </div>
  `
})
export class AppComponent {
  articles: Object[];

  constructor() {
    this.articles = [{
      title: 'The Angular 2 screencast',
      description: '1'
    },
    {
      title: 'The Angular 2 screencast',
      description: '2'
    },
    {
      title: 'The Angular 2 screencast',
      description: '3'
    },{
      title: 'The Angular 2 screencast',
      description: '4'
    }]
  }
}
