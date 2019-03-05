import { Article } from './../models/article.model';
export interface State {
  readonly articles: Article[];
  readonly currentArticle: Article;
}

export const initialState: State = {
  articles: [],
  currentArticle: null,
};
