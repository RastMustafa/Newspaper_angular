import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneSlideSectionComponent } from './one-slide-section.component';

describe('OneSlideSectionComponent', () => {
  let component: OneSlideSectionComponent;
  let fixture: ComponentFixture<OneSlideSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OneSlideSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OneSlideSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
