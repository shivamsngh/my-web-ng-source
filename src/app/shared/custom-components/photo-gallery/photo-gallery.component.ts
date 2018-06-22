import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { PhotoDetailData } from '../../models/photo-detail-data';

@Component({
  selector: 'app-photo-gallery',
  templateUrl: './photo-gallery.component.html',
  styleUrls: ['./photo-gallery.component.css']
})
export class PhotoGalleryComponent implements OnInit {

  @Input() photoDetails: Observable<PhotoDetailData[]>;
  constructor() { }

  ngOnInit() {
  }

}
