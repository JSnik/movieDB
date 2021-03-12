import {NgModule} from '@angular/core';
import {TrendingComponent} from './components/trending/trending.component';
import {PopularComponent} from './components/popular/popular.component';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home.component';
import {StoreModule} from '@ngrx/store';
import {reducers} from './store/reducer';
import {EffectsModule} from '@ngrx/effects';
import {GetTrendingEffect} from './store/effects/getTrending.effects';

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
    TrendingComponent,
    PopularComponent,
  ],
  imports: [
    EffectsModule.forFeature([GetTrendingEffect]),
    RouterModule.forChild(routes),
    StoreModule.forFeature('trending', reducers),
  ],
  providers: [],
  exports: [
    TrendingComponent,
    PopularComponent
  ]
})

export class HomeModule {}
