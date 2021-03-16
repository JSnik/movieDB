import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {MoviesService} from './services/movies.service';
import {EffectsModule} from '@ngrx/effects';
import {GetGenresEffect} from './store/effects/getGenres.effects';
import {StoreModule} from '@ngrx/store';
import {reducers} from './store/reducer';
import {CommonModule} from '@angular/common';
import {GenresService} from './services/genres.service';

@NgModule({
  declarations: [

  ],
  imports: [
    HttpClientModule,
    EffectsModule.forFeature([GetGenresEffect]),
    StoreModule.forFeature('genres', reducers),
    CommonModule
  ],
  providers: [
    MoviesService,
    GenresService
  ],
  exports: [
  ]

})

export class SharedModule {}
