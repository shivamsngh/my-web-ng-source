import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderJumpComponent } from './header-jump.component';

describe('HeaderJumpComponent', () => {
  let component: HeaderJumpComponent;
  let fixture: ComponentFixture<HeaderJumpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderJumpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderJumpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
