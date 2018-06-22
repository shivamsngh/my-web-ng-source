import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CustomComponentsModule } from '../custom-components/custom-components.module';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { NgsRevealModule } from 'ng-scrollreveal';

@NgModule({
  imports: [
    CommonModule,
    CustomComponentsModule,
    NgxPageScrollModule,
    NgsRevealModule
  ],
  declarations: [LayoutComponent, HeaderComponent, FooterComponent],
  exports: [LayoutComponent, HeaderComponent, FooterComponent]
})
export class LayoutModule { }
