import {Action, createReducer, on} from '@ngrx/store';
import {TrendingStateInterface} from '../types/trendingState.interface';
import {getTrendingAction, getTrendingFailureAction, getTrendingSuccessAction} from './actions/getTrending.action';


const initialState: TrendingStateInterface = {
  isLoading: false,
  error: null,
  data: null,
};

const trendingReducer = createReducer(
  initialState,
  on(
    getTrendingAction,
    (state): TrendingStateInterface => ({
      ...state,
      isLoading: true
    })
  ),
  on(
    getTrendingSuccessAction,
    (state, action): TrendingStateInterface => ({
      ...state,
      isLoading: false,
      data: action.trendingMovies

    })
  ),
  on(
    getTrendingFailureAction,
    (state): TrendingStateInterface => ({
      ...state,
      isLoading: false,
    })
  ),
);

// tslint:disable-next-line:typedef
export function reducers(state: TrendingStateInterface, action: Action) {
  return trendingReducer(state, action);
}
