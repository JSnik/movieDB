import {TrendingResponseModel} from '../../shared/models/trending-response.model';

export interface TrendingStateInterface {
  isLoading: boolean;
  error: string | null;
  data: TrendingResponseModel | null;
}
