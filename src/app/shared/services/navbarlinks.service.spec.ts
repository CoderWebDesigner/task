import { TestBed } from '@angular/core/testing';

import { NavbarlinksService } from './navbarlinks.service';

describe('NavbarlinksService', () => {
  let service: NavbarlinksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NavbarlinksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
