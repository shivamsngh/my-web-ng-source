import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BucketlistComponent } from './bucketlist.component';
import { ApiService } from '../shared/services/api.service';
import { DbService } from '../shared/services/db.service';
import { HeaderJumpComponent } from './header-jump/header-jump.component';
import { IndiaJumpGalleryComponent } from './india-jump-gallery/india-jump-gallery.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [BucketlistComponent, HeaderJumpComponent, IndiaJumpGalleryComponent],
  providers: [ApiService, DbService]
})
export class BucketlistModule { }
