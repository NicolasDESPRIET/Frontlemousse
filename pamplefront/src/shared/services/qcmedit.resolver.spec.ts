import { TestBed } from '@angular/core/testing';

import { QcmeditResolver } from './qcmedit.resolver';

describe('QcmeditResolver', () => {
  let resolver: QcmeditResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(QcmeditResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
