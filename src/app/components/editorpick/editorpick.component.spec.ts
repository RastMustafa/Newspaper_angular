import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorpickComponent } from './editorpick.component';

describe('EditorpickComponent', () => {
  let component: EditorpickComponent;
  let fixture: ComponentFixture<EditorpickComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditorpickComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorpickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
