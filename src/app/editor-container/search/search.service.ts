import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Report } from '../../docs.model';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor() { }

  private spliterRegex = /[\s]+|[\.\)\(;!?,][\s]+/;


  private _report = {
    matchedNo: 0,
    similarDic: {},
    similars: []
  }

  report: BehaviorSubject<Report> = new BehaviorSubject(this._report);

  key = new BehaviorSubject<string>('');

  Highlights: BehaviorSubject<string> = new BehaviorSubject('');

  levenshtein(a: string, b: string){
    if(a.length == 0) return b.length; 
    if(b.length == 0) return a.length; 
  
    var matrix = [];
  
    // increment along the first column of each row
    var i;
    for(i = 0; i <= b.length; i++){
      matrix[i] = [i];
    }
  
    // increment each column in the first row
    var j;
    for(j = 0; j <= a.length; j++){
      matrix[0][j] = j;
    }
  
    // Fill in the rest of the matrix
    for(i = 1; i <= b.length; i++){
      for(j = 1; j <= a.length; j++){
        if(b.charAt(i-1) == a.charAt(j-1)){
          matrix[i][j] = matrix[i-1][j-1];
        } else {
          matrix[i][j] = Math.min(matrix[i-1][j-1] + 1, // substitution
                                  Math.min(matrix[i][j-1] + 1, // insertion
                                           matrix[i-1][j] + 1)); // deletion
        }
      }
    }
  
    return matrix[b.length][a.length];
  };

  findSimilar(text: string, key: string): Report {
    let words = text.split(this.spliterRegex);
    const similars: string[] = [];
    let matchedNo = 0;
    const keyLength = key.length;
    for (let word of words) {
      if (word.length === key.length) {
        if (word === key) {
          matchedNo++;
          continue;
        } 
      } 
      if(Math.abs(word.length - key.length) <= 1){
        if(this.levenshtein(word, key) === 1){
          similars.push(word);
        }
      }
    }
    const similarDic: {
      [k: string]: number
    } = {};
    for (let k of similars) {
      if (similars[k]) {
        similarDic[k] = similarDic[k]++;
      } else {
        similarDic[k] = 1
      }
    }
    return {
      matchedNo,
      similars,
      similarDic
    };
  }

  private applyHighlights(text: string, key: string, exact: boolean) {
    const targetRegex = new RegExp(`(?<=[\\s]|^)${key}(?=([\\.?,!:]){0,1}[\\s]+|[.?,!:]$|$)`, 'g');
    const marker = exact ?
      '<mark class="exact">$&</mark>' :
      '<mark class="similar">$&</mark>'
    return text
      .replace(/\n$/g, '\n\n')
      .replace(targetRegex, marker);
  }

  findAllandHighlight(text: string, key: string) {
    const result = this.findSimilar(text, key);
    this.report.next(result);
    result.similars.forEach(w => {
      text = this.applyHighlights(text, w, false);
    });
    text = this.applyHighlights(text, key, true);
    this.Highlights.next(text);
  }
}
