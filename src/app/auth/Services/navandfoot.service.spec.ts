import { TestBed } from '@angular/core/testing';

import { NavandfootService } from './navandfoot.service';

describe('NavandfootService', () => {
  let service: NavandfootService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NavandfootService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
