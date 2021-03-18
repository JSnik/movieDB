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
import {GetMoviesResponse} from '../shared/models/get-movies-response.model';
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
  popular$: Observable<GetMoviesResponse>
  loader$: Observable<boolean>
  genresArr: DetailPageGenres[];
  searchedMovies: GetMoviesResponse;
  searchIsClicked = false;
  currentRoute = false;
  constructor(private store: Store,
              private route: ActivatedRoute,
              private detailPageService: DetailPageService,
              private moviesService: MoviesService
              ) { }

  ngOnInit(): void {
    this.catchRoute();
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

  search(queryP: any): void {
    this.moviesService.getSearchResult(queryP)
      .subscribe(
        (res: GetMoviesResponse) => {
          this.searchedMovies = res;
          console.log(this.searchedMovies);
        });
  }
  getSearched(event: any): void {
    const eventValue = event.target.value;
    if (eventValue.length > 0) {
      this.searchIsClicked = true;
      this.search(eventValue);
    }
  }

  catchRoute(): void{
    const url = this.route.url.pipe(
      map( (t) => {
        const s = t[1];
        if (s.path === 'popular'){
          this.currentRoute = true;
        }else{
          this.currentRoute = false;
        };
        return this.currentRoute
      })
    ).subscribe((res) => console.log(res))

  }

  showGenre(id): void {
    this.detailPageService.fetchDetailPage(id)
      .subscribe( (res) => {
        this.genresArr = res.genres.slice(0,1)
        console.log(this.genresArr);
      })
  }

  fetchPopular(): void {
    this.popular$ = this.moviesService.getMovies();
  }

  initializeLoader(): void {
    this.loader$ = this.store.pipe(select(isLoadingSelector));
  }

}
