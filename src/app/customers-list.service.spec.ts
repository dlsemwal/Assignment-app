import { TestBed } from '@angular/core/testing';

import { CustomersListService } from './customers-list.service';

describe('CustomersListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustomersListService = TestBed.get(CustomersListService);
    expect(service).toBeTruthy();
  });
});
