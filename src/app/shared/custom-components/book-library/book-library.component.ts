import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireList } from 'angularfire2/database';

@Component({
  selector: 'app-book-library',
  templateUrl: './book-library.component.html',
  styleUrls: ['./book-library.component.css']
})
export class BookLibraryComponent implements OnInit {

  @Input() books: Observable<any[]>;
  currentBook: any;
  totalBooks = 0;

  constructor() { }

  ngOnInit() {
    this.books.subscribe(data => {
      this.totalBooks = data.length;
      data.forEach(x => {
        if (!x.read) {
          this.currentBook = x;
        }
      });
    });
  }

}
