import {Action, createReducer, on} from '@ngrx/store';
import {HomeStateInterface} from '../types/homeState.interface';
import {getTrendingAction, getTrendingFailureAction, getTrendingSuccessAction} from './actions/getTrending.action';


const initialState: HomeStateInterface = {
  isLoading: false,
  error: null,
  data: null,
};

const trendingReducer = createReducer(
  initialState,
  on(
    getTrendingAction,
    (state): HomeStateInterface => ({
      ...state,
      isLoading: true
    })
  ),
  on(
    getTrendingSuccessAction,
    (state, action): HomeStateInterface => ({
      ...state,
      isLoading: false,
      data: action.trendingMovies

    })
  ),
  on(
    getTrendingFailureAction,
    (state): HomeStateInterface => ({
      ...state,
      isLoading: false,
    })
  ),
);

// tslint:disable-next-line:typedef
export function reducers(state: HomeStateInterface, action: Action) {
  return trendingReducer(state, action);
}
