import { TestBed } from '@angular/core/testing';

import { TidossSrvService } from './tidoss-srv.service';

describe('TidossSrvService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TidossSrvService = TestBed.get(TidossSrvService);
    expect(service).toBeTruthy();
  });
});
