import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveCrud2Component } from './reactive-crud2.component';

describe('ReactiveCrud2Component', () => {
  let component: ReactiveCrud2Component;
  let fixture: ComponentFixture<ReactiveCrud2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveCrud2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactiveCrud2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
