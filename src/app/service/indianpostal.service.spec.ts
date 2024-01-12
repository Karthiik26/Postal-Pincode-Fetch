import { TestBed } from '@angular/core/testing';

import { IndianpostalService } from './indianpostal.service';

describe('IndianpostalService', () => {
  let service: IndianpostalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IndianpostalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
