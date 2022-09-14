import { TestBed } from '@angular/core/testing';

import { CarapidataService } from './carapidata.service';

describe('CarapidataService', () => {
  let service: CarapidataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarapidataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
