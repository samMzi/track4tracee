import { TestBed } from '@angular/core/testing';

import { BonEnlvSrvService } from './bon-enlv-srv.service';

describe('BonEnlvSrvService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BonEnlvSrvService = TestBed.get(BonEnlvSrvService);
    expect(service).toBeTruthy();
  });
});
