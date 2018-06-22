import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomComponentsComponent } from './custom-components.component';
import { TwitterComponent } from './twitter/twitter.component';
import { BookLibraryComponent } from './book-library/book-library.component';
import { BlogComponent } from './blog/blog.component';
import { RecentEventCardComponent } from './recent-event-card/recent-event-card.component';
import { NgxTwitterTimelineModule } from 'ngx-twitter-timeline';
import { PhotoGalleryComponent } from './photo-gallery/photo-gallery.component';
import { NgsRevealModule } from 'ng-scrollreveal';

@NgModule({
  imports: [
    CommonModule,
    NgxTwitterTimelineModule,
    NgsRevealModule
  ],
  declarations: [CustomComponentsComponent, TwitterComponent, BookLibraryComponent,
    BlogComponent, RecentEventCardComponent, PhotoGalleryComponent],
  exports: [CustomComponentsComponent, TwitterComponent, BookLibraryComponent,
    BlogComponent, RecentEventCardComponent, PhotoGalleryComponent]
})
export class CustomComponentsModule { }
