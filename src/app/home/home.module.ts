import {NgModule} from '@angular/core';
import {TrendingComponent} from './components/trending/trending.component';
import {PopularComponent} from './components/popular/popular.component';

@NgModule({
  declarations: [
    TrendingComponent,
    PopularComponent
  ],
  imports: [

  ],
  providers: [],
  exports: [
    TrendingComponent,
    PopularComponent
  ]
})

export class HomeModule {}
