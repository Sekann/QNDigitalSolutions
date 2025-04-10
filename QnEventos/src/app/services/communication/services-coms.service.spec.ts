import { TestBed } from '@angular/core/testing';

import { ServicesComsService } from './services-coms.service';

describe('ServicesComsService', () => {
  let service: ServicesComsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicesComsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
