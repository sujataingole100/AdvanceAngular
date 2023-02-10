import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsInterviewComponent } from './js-interview.component';

describe('JsInterviewComponent', () => {
  let component: JsInterviewComponent;
  let fixture: ComponentFixture<JsInterviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsInterviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JsInterviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
