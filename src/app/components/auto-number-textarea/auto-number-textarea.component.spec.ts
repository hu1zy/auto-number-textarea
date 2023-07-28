import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoNumberTextareaComponent } from './auto-number-textarea.component';

describe('AutoNumberTextareaComponent', () => {
  let component: AutoNumberTextareaComponent;
  let fixture: ComponentFixture<AutoNumberTextareaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AutoNumberTextareaComponent]
    });
    fixture = TestBed.createComponent(AutoNumberTextareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
