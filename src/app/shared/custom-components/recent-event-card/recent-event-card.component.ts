import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-recent-event-card',
  templateUrl: './recent-event-card.component.html',
  styleUrls: ['./recent-event-card.component.css']
})
export class RecentEventCardComponent implements OnInit {

  @Input() events: Observable<any[]>;
  constructor() { }

  ngOnInit() {
  }

}
