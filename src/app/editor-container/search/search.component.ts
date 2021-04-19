import { AfterViewInit, Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Report } from '../../docs.model';
import { EditorService } from '../editor/editor.service';
import { SearchService } from './search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, AfterViewInit {

  constructor(
    private searchService: SearchService,
    private dataService: DataService
  ) { }
 

  report = {
    matchedNo: 0,
    similarDic: {},
    similars: []
  }

  key: string = '';

  onSearchClick() {
    this.searchService.findAllandHighlight(
      this.dataService.currentDoc.value.content,
      this.key);
  }

  onSearchKeyInput() {
    this.searchService.report.next({
      matchedNo: 0,
      similarDic: {},
      similars: []
    });
    this.searchService.Highlights.next('');
    this.searchService.key.next(this.key);
  }

  ngAfterViewInit(): void {
    this.searchService.report.subscribe(newReport => {
      this.report = newReport;
    });
  }

  ngOnInit(): void {
    
  }

}
