import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BehaviouralSubjectComponent } from './behavioural-subject.component';

describe('BehaviouralSubjectComponent', () => {
  let component: BehaviouralSubjectComponent;
  let fixture: ComponentFixture<BehaviouralSubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BehaviouralSubjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BehaviouralSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
