import {createFeatureSelector, createSelector} from '@ngrx/store';
import {HomeStateInterface} from '../types/homeState.interface';
import {AppStateInterface} from '../../shared/models/appState.interface';


export const trendingFeatureSelector = createFeatureSelector<
  AppStateInterface,
  HomeStateInterface
  >('trending')

export const isLoadingSelector = createSelector(
  trendingFeatureSelector,
  (trendingState: HomeStateInterface) => trendingState.isLoading
)

export const errorSelector = createSelector(
  trendingFeatureSelector,
  (trendingState: HomeStateInterface) => trendingState.error
)

export const trendingSelector = createSelector(
  trendingFeatureSelector,
  (trendingState: HomeStateInterface) => trendingState.data
)
