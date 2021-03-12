import {createAction, props} from '@ngrx/store';
import {TrendingModel} from '../../../shared/models/trending.model';
import {ActionTypes} from '../ationTypes';
import {TrendingResponseModel} from '../../../shared/models/trending-response.model';

export const getTrendingAction = createAction(
  ActionTypes.GET_TRENDING,
  props<{mediaType: string, timeWindow: string, pageId: string}>()
);

export const getTrendingSuccessAction = createAction(
  ActionTypes.GET_TRENDING_SUCCESS,
  props<{trendingMovies: TrendingResponseModel}>()
);

export const getTrendingFailureAction = createAction(
  ActionTypes.GET_TRENDING_FAILURE
);
