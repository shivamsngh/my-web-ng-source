import { Component, OnInit, Input } from '@angular/core';
import { DbService } from '../../shared/services/db.service';
import { Observable } from 'rxjs/Observable';
import { PhotoDetailData } from '../../shared/models/photo-detail-data';

@Component({
  selector: 'app-india-jump-gallery',
  templateUrl: './india-jump-gallery.component.html',
  styleUrls: ['./india-jump-gallery.component.css']
})
export class IndiaJumpGalleryComponent implements OnInit {

  @Input() photoDetails: Observable<PhotoDetailData[]>;
  constructor() { }

  ngOnInit() {
  }

}
