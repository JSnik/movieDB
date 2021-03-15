import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home.component';
import {StoreModule} from '@ngrx/store';
import {reducers} from './store/reducer';
import {EffectsModule} from '@ngrx/effects';
import {GetTrendingEffect} from './store/effects/getTrending.effects';
import {CommonModule} from '@angular/common';

const routes: Routes = [
  {
    path: 'home/:page',
    component: HomeComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home/trending'
  }
];
@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    EffectsModule.forFeature([GetTrendingEffect]),
    RouterModule.forChild(routes),
    StoreModule.forFeature('trending', reducers),
    CommonModule,
  ],
  providers: [],
  exports: [
    HomeComponent
  ]
})

export class HomeModule {}
