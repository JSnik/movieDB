import {TrendingModel} from './trending.model';

export interface TrendingResponseModel {
  page: number;
  results: TrendingModel[];
}
