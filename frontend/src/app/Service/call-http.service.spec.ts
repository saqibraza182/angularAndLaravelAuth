import { TestBed } from '@angular/core/testing';

import { CallHttpService } from './call-http.service';

describe('CallHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CallHttpService = TestBed.get(CallHttpService);
    expect(service).toBeTruthy();
  });
});
