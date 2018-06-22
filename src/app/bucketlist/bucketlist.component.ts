import { Component, OnInit } from '@angular/core';
import { DbService } from '../shared/services/db.service';
import { PhotoDetailData } from '../shared/models/photo-detail-data';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-bucketlist',
  templateUrl: './bucketlist.component.html',
  styleUrls: ['./bucketlist.component.css']
})
export class BucketlistComponent implements OnInit {
  photoDetails: Observable<PhotoDetailData[]>;
  constructor(private db: DbService) { }

  ngOnInit() {
    this.photoDetails = this.db.getGalleryPhotoDetails();
    this.photoDetails.subscribe(data => {
      console.log('data photo', data);
    });
  }

}
