import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateCrud1Component } from './template-crud1.component';

describe('TemplateCrud1Component', () => {
  let component: TemplateCrud1Component;
  let fixture: ComponentFixture<TemplateCrud1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateCrud1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateCrud1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
