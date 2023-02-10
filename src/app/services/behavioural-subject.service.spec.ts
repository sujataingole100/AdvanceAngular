import { TestBed } from '@angular/core/testing';

import { BehaviouralSubjectService } from './behavioural-subject.service';

describe('BehaviouralSubjectService', () => {
  let service: BehaviouralSubjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BehaviouralSubjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
