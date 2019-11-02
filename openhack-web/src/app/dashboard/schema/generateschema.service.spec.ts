import { TestBed } from '@angular/core/testing';

import { GenerateschemaService } from './generateschema.service';

describe('GenerateschemaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GenerateschemaService = TestBed.get(GenerateschemaService);
    expect(service).toBeTruthy();
  });
});
