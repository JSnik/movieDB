import {NgModule} from '@angular/core';
import {TrendingComponent} from './components/trending/trending.component';
import {PopularComponent} from './components/popular/popular.component';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home.component';

const routes: Routes = [
  {
    path: 'home/:page',
    component: HomeComponent
  }
];
@NgModule({
  declarations: [
    HomeComponent,
    TrendingComponent,
    PopularComponent,
  ],
  imports: [
    RouterModule.forChild(routes)
  ],
  providers: [],
  exports: [
    TrendingComponent,
    PopularComponent
  ]
})

export class HomeModule {}
