import { TestBed } from '@angular/core/testing';

import { GhubService } from './ghub.service';

describe('GhubService', () => {
  let service: GhubService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GhubService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
