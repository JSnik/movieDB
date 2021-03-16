import { Component, OnInit } from '@angular/core';
import {MoviesService} from '../shared/services/movies.service';
import {select, Store} from '@ngrx/store';
import {getTrendingAction} from './store/actions/getTrending.action';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {TrendingResponseModel} from '../shared/models/trending-response.model';
import {trendingSelector} from './store/selectors';
import {GenresResponseInterface} from '../shared/models/genres-response.interface';
import {getGenresAction} from '../shared/store/actions/getGenres.action';
import {genresSelector} from '../shared/store/selectors';
import {filter, map} from 'rxjs/operators';
import {GenresService} from "../shared/services/genres.service";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  mediaType: string;
  timeWindow: string;
  pageId: string;
  trending$: Observable<TrendingResponseModel>;
  genres$: Observable<GenresResponseInterface>;

  mapCategoryTypes: Map<string, string> = new Map<string, string>(
    [
      [
        'id',
        'name'
      ]
    ]);

  constructor(private store: Store,
              private route: ActivatedRoute,
              private genresService: GenresService) { }

  ngOnInit(): void {
    this.initializeTrendingValues();
    this.initializeGenresValue();
    this.fetchDate();
    this.getGenres();
  }

  fetchDate(): void {
    this.store.dispatch(getTrendingAction({mediaType: this.mediaType, timeWindow: this.timeWindow, pageId: this.pageId}));
    this.store.dispatch(getGenresAction());
  }

  initializeTrendingValues(): void {
    this.mediaType = 'all/';
    this.timeWindow = 'day';
    this.pageId = '1';
    this.trending$ = this.store.pipe(select(trendingSelector));
  }
  initializeGenresValue(): void {
     this.store.pipe(select(genresSelector)).subscribe( res => {
      console.log(res);
    });
  }
  getGenres(): void {
    this.trending$.pipe(
      map( (genres) => ({
        ...genres?.results,
        genres: 'test',
      }))
    ).subscribe( res => console.log(res));
  }

}
