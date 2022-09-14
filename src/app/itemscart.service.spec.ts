import { TestBed } from '@angular/core/testing';

import { ItemscartService } from './itemscart.service';

describe('ItemscartService', () => {
  let service: ItemscartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItemscartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
