import {createFeatureSelector, createSelector} from '@ngrx/store';
import {TrendingStateInterface} from '../types/trendingState.interface';
import {AppStateInterface} from '../../shared/models/appState.interface';


export const trendingFeatureSelector = createFeatureSelector<
  AppStateInterface,
  TrendingStateInterface
  >('trending')

export const isLoadingSelector = createSelector(
  trendingFeatureSelector,
  (trendingState: TrendingStateInterface) => trendingState.isLoading
)

export const errorSelector = createSelector(
  trendingFeatureSelector,
  (trendingState: TrendingStateInterface) => trendingState.error
)

export const trendingSelector = createSelector(
  trendingFeatureSelector,
  (trendingState: TrendingStateInterface) => trendingState.data
)
