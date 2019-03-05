import { Article } from './../models/article.model';
import { Action } from '@ngrx/store';

export enum ArticleActionTypes {
  ADD = '[ARTICLE EDITOR PAGE] Add',
  ADD_SUCCESS = '[ARTICLE EDITOR PAGE] Add Success',
  ADD_FAIL = '[ARTICLE EDITOR PAGE] Add Fail',
  UPDATE = '[ARTICLE EDITOR PAGE] Update',
  UPDATE_SUCCESS = '[ARTICLE EDITOR PAGE] Update Success',
  UPDATE_FAIL = '[ARTICLE EDITOR PAGE] Update Fail',
  LOAD_ALL = '[ARTICLES PAGE] Load All',
  LOAD_ALL_SUCCESS = '[ARTICLES PAGE] Loaded Success All',
  LOAD_ALL_FAIL = '[ARTICLES PAGE] Loaded Fail All',
  LOAD_ONE = '[ARTICLES PAGE] Load One',
  LOAD_ONE_SUCCESS = '[ARTICLES PAGE] Loaded Success One',
  LOAD_ONE_FAIL = '[ARTICLES PAGE] Loaded Fail One',
}

export class Add implements Action {
  readonly type = ArticleActionTypes.ADD;

  constructor(readonly payload: Article) {}
}

export class AddSuccess implements Action {
  readonly type = ArticleActionTypes.ADD_SUCCESS;
}

export class AddedFail implements Action {
  readonly type = ArticleActionTypes.ADD_FAIL;
}

export class Update implements Action {
  readonly type = ArticleActionTypes.UPDATE;

  constructor(readonly payload: { id: string; article: Article }) {}
}

export class UpdateSuccess implements Action {
  readonly type = ArticleActionTypes.UPDATE_SUCCESS;
}

export class UpdateFail implements Action {
  readonly type = ArticleActionTypes.UPDATE_FAIL;
}

export class LoadAll implements Action {
  readonly type = ArticleActionTypes.LOAD_ALL;
}

export class LoadAllSuccess implements Action {
  readonly type = ArticleActionTypes.LOAD_ALL_SUCCESS;

  constructor(readonly payload: Article[]) {}
}

export class LoadAllFail implements Action {
  readonly type = ArticleActionTypes.LOAD_ALL_FAIL;
}

export class LoadOne implements Action {
  readonly type = ArticleActionTypes.LOAD_ONE;

  constructor(readonly payload: string) {}
}

export class LoadOneSuccess implements Action {
  readonly type = ArticleActionTypes.LOAD_ONE_SUCCESS;

  constructor(readonly payload: Article) {}
}

export class LoadOneFail implements Action {
  readonly type = ArticleActionTypes.LOAD_ONE_FAIL;
}

export type ArticleActions =
  | Add
  | AddSuccess
  | Update
  | LoadAll
  | LoadAllSuccess
  | LoadAllFail
  | LoadOne
  | LoadOneSuccess
  | LoadOneFail;
