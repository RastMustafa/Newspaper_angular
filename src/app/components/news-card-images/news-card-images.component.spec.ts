import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsCardImagesComponent } from './news-card-images.component';

describe('NewsCardImagesComponent', () => {
  let component: NewsCardImagesComponent;
  let fixture: ComponentFixture<NewsCardImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsCardImagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsCardImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
