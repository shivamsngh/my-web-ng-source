import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/observable';
import { PhotoDetailData } from '../../shared/models/photo-detail-data';

@Component({
  selector: 'app-header-jump',
  templateUrl: './header-jump.component.html',
  styleUrls: ['./header-jump.component.css']
})
export class HeaderJumpComponent implements OnInit {
  showVideoPoster = true;
  details: PhotoDetailData[] = [];
  @Input() photoDetails: Observable<PhotoDetailData[]>;
  constructor() { }

  ngOnInit() {
    this.photoDetails.subscribe(details => {
      this.details = details;
      console.log('detais', this.details[0]);
    });
  }

  videoControl(elm: HTMLVideoElement) {
    console.log(elm.paused);
    if (elm.paused) {
      elm.play(); this.showVideoPoster = true;
    } else {
      elm.pause(); this.showVideoPoster = true;
    }
  }

}
