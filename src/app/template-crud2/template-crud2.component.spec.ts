import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateCrud2Component } from './template-crud2.component';

describe('TemplateCrud2Component', () => {
  let component: TemplateCrud2Component;
  let fixture: ComponentFixture<TemplateCrud2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateCrud2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateCrud2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
