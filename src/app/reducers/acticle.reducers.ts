import { State } from './../state/state';
import { initialState } from './../state/state';
import { ArticleActions } from './../actions/article.actions';
import { ArticleActionTypes } from './../actions/article.actions';

export function articleReducer(
  state = initialState,
  action: ArticleActions,
): State {
  switch (action.type) {
    case ArticleActionTypes.LOAD_ALL_SUCCESS:
      return {
        ...state,
        articles: [...action.payload],
        loadArticle: null,
      };
    case ArticleActionTypes.LOAD_ONE_SUCCESS: {
      return {
        ...state,
        articles: [...state.articles],
        loadArticle: action.payload,
      };
    }
    default:
      return state;
  }
}
