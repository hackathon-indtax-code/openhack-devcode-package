import { TestBed } from '@angular/core/testing';

import { ItrschemaService } from './itrschema.service';

describe('ItrschemaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ItrschemaService = TestBed.get(ItrschemaService);
    expect(service).toBeTruthy();
  });
});
