import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InlineEditingWay2Component } from './inline-editing-way2.component';

describe('InlineEditingWay2Component', () => {
  let component: InlineEditingWay2Component;
  let fixture: ComponentFixture<InlineEditingWay2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InlineEditingWay2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InlineEditingWay2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
