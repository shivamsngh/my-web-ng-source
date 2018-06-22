import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { NgxTwitterTimelineModule } from 'ngx-twitter-timeline';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { NgsRevealModule } from 'ng-scrollreveal';

import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';
import { SharedModule } from './shared/shared.module';
import { BucketlistComponent } from './bucketlist/bucketlist.component';
import { BucketlistModule } from './bucketlist/bucketlist.module';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  { path: 'bucketlist', component: BucketlistComponent },
  { path: 'home', component: HomeComponent },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true }),
    HomeModule,
    SharedModule,
    BucketlistModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    NgxPageScrollModule,
    NgxTwitterTimelineModule.forRoot(),
    NgsRevealModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }
