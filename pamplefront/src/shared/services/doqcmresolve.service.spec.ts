import { TestBed } from '@angular/core/testing';

import { DoqcmresolveService } from './doqcmresolve.service';

describe('DoqcmresolveService', () => {
  let service: DoqcmresolveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DoqcmresolveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
