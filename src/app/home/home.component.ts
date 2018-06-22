import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { DbService } from '../shared/services/db.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  events: Observable<any[]>;
  constructor(private db: DbService) { }

  ngOnInit() {
    this.events = this.db.getRecentEvents();
  }

}
