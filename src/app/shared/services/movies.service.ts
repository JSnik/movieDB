import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {TrendingResponseModel} from '../models/trending-response.model';
import {environment} from '../../../environments/environment';
import {catchError} from 'rxjs/operators';

@Injectable()
export class MoviesService {
  private trendingUrl = `${environment.baseUrl}trending/`;
  constructor(private http: HttpClient) {
  }

  fetchTrendingMovies(mediaType: string, timeWindow: string, pageId: string): Observable<TrendingResponseModel> {
    const trendingFullUrl = `${this.trendingUrl}${mediaType}${timeWindow}`;
    return this.http.get<TrendingResponseModel>(trendingFullUrl,  {
      params : {
        api_key: 'd1250751a8ae89f9a5dd5bcc28880e8a',
        page: pageId.toString(),
      }
    })
  }

}
