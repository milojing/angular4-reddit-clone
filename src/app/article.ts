interface ArticleJSON {
  title: string;
  url: string;
  votes: number;
  publishedAt: string;
  description:string;
  author: string;
  urlToImage:string;
}

export class Article {
  public publishedAt: Date;
  static fromJSON(json:ArticleJSON): Article {
    let article = Object.create(Article.prototype);
    return Object.assign(article, json, {
      votes: json.votes ? json.votes: 0,
      publishedAt: json.publishedAt ? new Date(json.publishedAt): new Date(),
      imageUrl: json.urlToImage
    });
  }
  constructor(
    public title: string,
    public description: string,
    public imageUrl:string,
    public votes?: number
  ) {
    this.votes = votes || 0;
    this.publishedAt = new Date();
  }

  public date(): Date {
    return new Date();
  }

  public voteDown(): void {
    this.votes = this.votes - 1;
  }

  public voteUp(): void {
    this.votes = this.votes + 1;
  }
}
