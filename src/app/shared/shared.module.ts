import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { CustomComponentsModule } from './custom-components/custom-components.module';
import { LayoutModule } from './layout/layout.module';

/**
 * It is important for shared module to have import and export
 * any module which is required by child modules
 */

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    RouterModule,
    CustomComponentsModule,
    LayoutModule
  ],
  declarations: [],
  exports: [
    CommonModule,
    HttpModule,
    RouterModule,
    CustomComponentsModule,
    LayoutModule
  ]
})
export class SharedModule { }
