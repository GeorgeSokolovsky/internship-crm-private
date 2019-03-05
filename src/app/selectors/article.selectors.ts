import { State } from './../state/state';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const getArticle = createFeatureSelector('article');

export const getArticles = createSelector(
  getArticle,
  (state: State) => state.articles,
);

export const getCurrentArticle = createSelector(
  getArticle,
  (state: State) => state.currentArticle,
);
