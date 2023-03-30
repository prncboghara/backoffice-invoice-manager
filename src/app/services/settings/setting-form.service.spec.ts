import { TestBed } from '@angular/core/testing';

import { SettingFormService } from './setting-form.service';

describe('SettingFormService', () => {
  let service: SettingFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SettingFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
