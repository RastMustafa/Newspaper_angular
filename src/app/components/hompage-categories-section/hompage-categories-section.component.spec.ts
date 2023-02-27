import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HompageCategoriesSectionComponent } from './hompage-categories-section.component';

describe('HompageCategoriesSectionComponent', () => {
  let component: HompageCategoriesSectionComponent;
  let fixture: ComponentFixture<HompageCategoriesSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HompageCategoriesSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HompageCategoriesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
