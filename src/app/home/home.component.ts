import { Component, OnInit } from '@angular/core';
import {MoviesService} from '../shared/services/movies.service';
import {select, Store} from '@ngrx/store';
import {getTrendingAction} from './store/actions/getTrending.action';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {TrendingResponseModel} from '../shared/models/trending-response.model';
import {trendingSelector} from './store/selectors';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  mediaType: string;
  timeWindow: string;
  pageId: string;
  trending$: Observable<TrendingResponseModel>
  constructor(private store: Store,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.initializeValues();
    this.fetchDate();
  }
  fetchDate(): void {
    this.store.dispatch(getTrendingAction({mediaType: this.mediaType, timeWindow: this.timeWindow, pageId: this.pageId}))
  }

  initializeValues(): void {
    this.mediaType = 'all/';
    this.timeWindow = 'day';
    this.pageId = '1';
    this.trending$ = this.store.pipe(select(trendingSelector));
    this.trending$.subscribe(
      (res: TrendingResponseModel) => {
        console.log(res);
      }
    )
  }

}
