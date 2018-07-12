import { TestBed, async, inject } from '@angular/core/testing';

import { AuthchildrenGuard } from './authchildren.guard';

describe('AuthchildrenGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthchildrenGuard]
    });
  });

  it('should ...', inject([AuthchildrenGuard], (guard: AuthchildrenGuard) => {
    expect(guard).toBeTruthy();
  }));
});
