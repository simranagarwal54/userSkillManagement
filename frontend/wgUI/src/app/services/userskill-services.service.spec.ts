import { TestBed } from '@angular/core/testing';

import { UserskillServicesService } from './userskill-services.service';

describe('UserskillServicesService', () => {
  let service: UserskillServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserskillServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
