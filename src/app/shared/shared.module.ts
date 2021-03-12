import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {MoviesService} from './services/movies.service';

@NgModule({
  declarations: [

  ],
  imports: [
    HttpClientModule
  ],
  providers: [
    MoviesService
  ],

})

export class SharedModule {}
