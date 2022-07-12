import { TestBed } from '@angular/core/testing';

import { RacionServicesService } from './racion-services.service';

describe('RacionServicesService', () => {
  let service: RacionServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RacionServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
