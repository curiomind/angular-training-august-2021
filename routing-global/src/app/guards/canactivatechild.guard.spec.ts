import { TestBed } from '@angular/core/testing';

import { CanactivatechildGuard } from './canactivatechild.guard';

describe('CanactivatechildGuard', () => {
  let guard: CanactivatechildGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CanactivatechildGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
