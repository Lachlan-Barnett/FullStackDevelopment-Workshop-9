import { TestBed } from '@angular/core/testing';
import { Proddata } from './proddata';

describe('Proddata', () => {
  let service: Proddata;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Proddata);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
