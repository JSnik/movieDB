import {Injectable} from '@angular/core';
import {createEffect, Actions, ofType} from '@ngrx/effects';
import {map, catchError, switchMap, tap} from 'rxjs/operators';
import {HttpErrorResponse} from '@angular/common/http';
import {of} from 'rxjs';
import {getTrendingAction, getTrendingFailureAction, getTrendingSuccessAction} from '../actions/getTrending.action';
import {MoviesService} from '../../../shared/services/movies.service';
import {TrendingResponseModel} from '../../../shared/models/trending-response.model';

@Injectable()
export class GetTrendingEffect {
  // @ts-ignore
  getTrending$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getTrendingAction),
      switchMap(({mediaType, timeWindow, pageId}) => {
        return this.movieService.fetchTrendingMovies(mediaType, timeWindow, pageId )            .pipe(
          map((trendingMovies: TrendingResponseModel) => {
            return getTrendingSuccessAction({trendingMovies})
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(
              getTrendingFailureAction()
            )
          })
        )
      })
    )
  )

  constructor(private actions$: Actions, private movieService: MoviesService) {}
}
