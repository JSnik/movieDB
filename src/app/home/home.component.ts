import { Component, OnInit } from '@angular/core';
import {MoviesService} from '../shared/services/movies.service';
import {select, Store} from '@ngrx/store';
import {getTrendingAction} from './store/actions/getTrending.action';
import {ActivatedRoute} from '@angular/router';
import {Observable, Subscription} from 'rxjs';
import {TrendingResponseModel} from '../shared/models/trending-response.model';
import {isLoadingSelector, trendingSelector} from './store/selectors';
import {DetailPageService} from '../shared/services/detail-page.service';
import {DetailPageGenres} from '../shared/models/detailPage.model';
import {map} from 'rxjs/operators';
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
  loader$: Observable<boolean>
  genresArr: DetailPageGenres[];
  constructor(private store: Store,
              private route: ActivatedRoute,
              private detailPageService: DetailPageService,
              ) { }

  ngOnInit(): void {
    this.initializeTrendingValues()
    this.fetchDate();
    this.initializeLoader()
  }

  fetchDate(): void {
    this.store.dispatch(getTrendingAction({mediaType: this.mediaType, timeWindow: this.timeWindow, pageId: this.pageId}));
  }

  initializeTrendingValues(): void {
    this.mediaType = 'all/';
    this.timeWindow = 'day';
    this.pageId = '1';
    this.trending$ = this.store.pipe(select(trendingSelector));
  }

  showGenre(id): void {
    this.detailPageService.fetchDetailPage(id)
      .subscribe( (res) => {
        this.genresArr = res.genres.slice(0,1)
        console.log(this.genresArr);
      })
  }
  initializeLoader(): void {
    this.loader$ = this.store.pipe(select(isLoadingSelector));
  }
}
