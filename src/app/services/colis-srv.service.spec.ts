import { TestBed } from '@angular/core/testing';

import { ColisSrvService } from './colis-srv.service';

describe('ColisSrvService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ColisSrvService = TestBed.get(ColisSrvService);
    expect(service).toBeTruthy();
  });
});
