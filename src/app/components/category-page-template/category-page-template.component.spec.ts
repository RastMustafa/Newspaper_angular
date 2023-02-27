import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryPageTemplateComponent } from './category-page-template.component';

describe('CategoryPageTemplateComponent', () => {
  let component: CategoryPageTemplateComponent;
  let fixture: ComponentFixture<CategoryPageTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryPageTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryPageTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
