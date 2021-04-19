import { TestBed } from '@angular/core/testing';

import { EditorContainerService } from './editor-container.service';

describe('EditorContainerService', () => {
  let service: EditorContainerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditorContainerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
