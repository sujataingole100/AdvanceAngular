import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveCrud1Component } from './reactive-crud1.component';

describe('ReactiveCrud1Component', () => {
  let component: ReactiveCrud1Component;
  let fixture: ComponentFixture<ReactiveCrud1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveCrud1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactiveCrud1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
