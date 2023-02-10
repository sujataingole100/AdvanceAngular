import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReusableTableCompComponent } from './reusable-table-comp.component';

describe('ReusableTableCompComponent', () => {
  let component: ReusableTableCompComponent;
  let fixture: ComponentFixture<ReusableTableCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReusableTableCompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReusableTableCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
