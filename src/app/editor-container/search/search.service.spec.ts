import { TestBed } from '@angular/core/testing';

import { SearchService } from './search.service';

describe('SearchService', () => {
  let service: SearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Should return { matchedNo: 1, similars: ["Words","Wor","word"] } based on input parameters: text: "Word Words Wor word" and key "Word"', () => {
    expect(service.findSimilar("Word Words Wor word", "Word")).toEqual(jasmine.objectContaining({matchedNo: 1, similars: ["Words", "Wor", "word"]}));
  });
  it('Should return { matched: 1, similars: ["Words","Wor","word"] } based on input parameters: text: "Word Words Wor word Word.Wor" and key "Word"', () => {
    expect(service.findSimilar("Word Words Wor word Word.Wor", "Word")).toEqual(jasmine.objectContaining({matchedNo: 1, similars: ["Words", "Wor", "word"]}));
  });
  it(`Should return { matchedNo: 2, similars: ["Words","Wor","word"] } based on input parameters: 
    text: "Word, Words
    Wor word. Word" and key "Word"`, () => {
    expect(service.findSimilar(
      `Word, Words
      Wor word. Word`,
      "Word")).toEqual(jasmine.objectContaining({matchedNo: 2, similars:["Words", "Wor", "word"]}));
  });
});
