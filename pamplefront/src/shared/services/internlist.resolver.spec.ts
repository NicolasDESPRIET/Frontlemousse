import { TestBed } from '@angular/core/testing';

import { InternlistResolver } from './internlist.resolver';

describe('InternlistResolver', () => {
  let resolver: InternlistResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(InternlistResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
