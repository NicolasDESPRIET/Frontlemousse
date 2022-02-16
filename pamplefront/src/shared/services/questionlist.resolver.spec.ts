import { TestBed } from '@angular/core/testing';

import { QuestionlistResolver } from './questionlist.resolver';

describe('QuestionlistResolver', () => {
  let resolver: QuestionlistResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(QuestionlistResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
