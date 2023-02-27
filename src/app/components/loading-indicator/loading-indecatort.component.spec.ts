import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingIndecatortComponent } from './loading-indecatort.component';

describe('LoadingIndecatortComponent', () => {
  let component: LoadingIndecatortComponent;
  let fixture: ComponentFixture<LoadingIndecatortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadingIndecatortComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadingIndecatortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
