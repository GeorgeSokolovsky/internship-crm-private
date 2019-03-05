// import { UserAuth } from './../auth/user-auth';
import { Article } from './../models/article.model';
export interface State {
  readonly articles: Article[];
  readonly currentArticle: Article;
  readonly authError: Error;
}

export const initialState: State = {
  articles: [],
  currentArticle: null,
  authError: null,
};
