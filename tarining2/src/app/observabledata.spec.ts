import { TestBed } from '@angular/core/testing';

import { Observabledata } from './observabledata';

describe('Observabledata', () => {
  let service: Observabledata;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Observabledata);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
