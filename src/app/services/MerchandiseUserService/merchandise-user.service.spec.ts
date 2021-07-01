import { TestBed } from '@angular/core/testing';

import { MerchandiseUserService } from './merchandise-user.service';

describe('MerchandiseUserService', () => {
  let service: MerchandiseUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MerchandiseUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
