import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndiaJumpGalleryComponent } from './india-jump-gallery.component';

describe('IndiaJumpGalleryComponent', () => {
  let component: IndiaJumpGalleryComponent;
  let fixture: ComponentFixture<IndiaJumpGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndiaJumpGalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndiaJumpGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
