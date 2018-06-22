import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../shared/services/api.service';

import { BlogData } from '../../shared/models/blog-response';
import { DbService } from '../../shared/services/db.service';
import { Observable } from 'rxjs/Observable';
import { AngularFireList } from 'angularfire2/database';


@Component({
  selector: 'app-home-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css']
})
export class SocialComponent implements OnInit {

  books: Observable<any[]>;
  social: { blogs: Array<BlogData> } = { blogs: [] };

  constructor(private api: ApiService, private db: DbService) {
    this.api.getBlogData().subscribe(data => {
      console.log(data);
      this.social.blogs = data.items;
    });
    this.books = db.getBooksFromDb();
  }

  ngOnInit() {
  }

}
