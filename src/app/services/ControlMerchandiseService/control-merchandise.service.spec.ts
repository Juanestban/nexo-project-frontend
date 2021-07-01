import { TestBed } from '@angular/core/testing';

import { ControlMerchandiseService } from './control-merchandise.service';

describe('ControlMerchandiseService', () => {
  let service: ControlMerchandiseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ControlMerchandiseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
