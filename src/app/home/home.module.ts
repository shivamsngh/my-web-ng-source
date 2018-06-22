import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { AboutComponent } from './about/about.component';
import { SocialComponent } from './social/social.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { RouterModule } from '@angular/router';
import { MoreComponent } from './more/more.component';
import { ApiService } from '../shared/services/api.service';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { DbService } from '../shared/services/db.service';
import { SharedModule } from '../shared/shared.module';
import {NgsRevealModule} from 'ng-scrollreveal';
import { BucketlistModule } from '../bucketlist/bucketlist.module';
import { NgxPageScrollModule } from 'ngx-page-scroll';

const homeRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: '',
    component: HomeComponent
  }
]);

@NgModule({
  imports: [
    CommonModule,
    homeRouting,
    SharedModule,
    BucketlistModule,
    NgxPageScrollModule,
    AngularFireDatabaseModule,
    NgsRevealModule
  ],
  declarations: [ HomeComponent, AboutComponent, SocialComponent, PortfolioComponent, ContactComponent,
    MoreComponent],
  exports: [ HomeComponent, AboutComponent, SocialComponent, PortfolioComponent, ContactComponent,
    MoreComponent],
  providers: [ApiService, DbService]
})
export class HomeModule { }
