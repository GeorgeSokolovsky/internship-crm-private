import { Article } from './../models/article.model';
export interface State {
  readonly articles: Article[];
  readonly loadArticle: Article;
}

export const initialState: State = {
  articles: [],
  loadArticle: null,
};
