import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { PhotoDetailData } from '../models/photo-detail-data';

@Injectable()
export class DbService {
  items: AngularFireList<any>;
  constructor(private db: AngularFireDatabase) { }

  public getBooksFromDb(): Observable<any[]> {
    return this.db.list('/books').valueChanges();
  }

  public getAllJson() {
    return this.db.database.ref('/').once('value').then(function (snapshot) {
      const data = (snapshot.val()) || 'Anonymous';
      console.log('web', data);
      return data;
    });
  }

  public getRecentEvents(): Observable<any[]> {
    return this.db.list('/events').valueChanges();
  }

  public getGalleryPhotoDetails(): Observable<PhotoDetailData[]> {
    return this.db.list<PhotoDetailData>('/listItems').valueChanges();
  }

}
