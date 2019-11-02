import { TestBed } from '@angular/core/testing';

import { FileconverterService } from './fileconverter.service';

describe('FileconverterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FileconverterService = TestBed.get(FileconverterService);
    expect(service).toBeTruthy();
  });
});
