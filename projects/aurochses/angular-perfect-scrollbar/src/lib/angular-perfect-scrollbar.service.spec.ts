import { TestBed, inject } from '@angular/core/testing';

import { AngularPerfectScrollbarService } from './angular-perfect-scrollbar.service';

describe('AngularPerfectScrollbarService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AngularPerfectScrollbarService]
    });
  });

  it('should be created', inject([AngularPerfectScrollbarService], (service: AngularPerfectScrollbarService) => {
    expect(service).toBeTruthy();
  }));
});
