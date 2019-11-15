import { TestBed } from '@angular/core/testing';

import { CompleteBlogService } from './complete-blog.service';

describe('CompleteBlogService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CompleteBlogService = TestBed.get(CompleteBlogService);
    expect(service).toBeTruthy();
  });
});
