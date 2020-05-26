import { TestBed } from '@angular/core/testing';

import { DiaryDataService } from './diary-data.service';

describe('DiaryDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DiaryDataService = TestBed.get(DiaryDataService);
    expect(service).toBeTruthy();
  });
});
