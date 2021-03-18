import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {MoviesService} from './services/movies.service';
import {CommonModule} from '@angular/common';
import {DetailPageService} from './services/detail-page.service';
import { LoaderComponent } from './components/loader/loader.component';
import { DetailPageComponent } from './components/detail-page/detail-page.component';
import {RouterModule, Routes} from '@angular/router';
import {TrailersService} from './services/trailers.service';
import {SanitizeUrlPipe} from './pipes/sanitize-url.pipe';
import {PersonService} from './services/person.service';


const routes: Routes = [
  {
    path: 'home/detail-page/:title',
    component: DetailPageComponent
  },
  // {
  //   path: '',
  //   pathMatch: 'full',
  //   redirectTo: 'home/pageId'
  // }
];

@NgModule({
  declarations: [

  LoaderComponent,
  DetailPageComponent,
    SanitizeUrlPipe
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    RouterModule.forChild(routes),
  ],
  providers: [
    MoviesService,
    DetailPageService,
    TrailersService,
    PersonService
  ],
  exports: [
    LoaderComponent
  ]

})

export class SharedModule {}
