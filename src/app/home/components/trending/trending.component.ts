import {Component, Input, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {getTrendingAction} from '../../store/actions/getTrending.action';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.scss']
})
export class TrendingComponent implements OnInit {
  @Input('') mediaType: string;
  @Input() timeWindow: string;
  @Input() pageId: string;
  constructor() { }

  ngOnInit(): void {

  }
}
