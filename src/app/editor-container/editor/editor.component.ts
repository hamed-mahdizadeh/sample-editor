import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { OfflineDoc } from 'src/app/docs.model';
import { SearchService } from '../search/search.service';
import { EditorService } from './editor.service';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit, AfterViewInit {

  constructor(
    private editorService: EditorService,
    private searchService: SearchService,
    private dataService: DataService
    ) { }

  
  @ViewChild('textArea') textArea: ElementRef<HTMLTextAreaElement>;

  @ViewChild('backgroundArea') backgroundArea: ElementRef<HTMLDivElement>;

  @ViewChild('highlights') highlights: ElementRef<HTMLDivElement>;

  doc: OfflineDoc;

  report = {
    matchedNo: 0,
    similarDic: {},
    similars: []
  }

  onInput(text: string) {
    this.editorService.documentText.next(text);
    this.doc.content = text;
    this.dataService.currentDoc.next(this.doc);
    this.searchService.report.next(this.report);
    this.searchService.Highlights.next('');
    this.highlights.nativeElement.innerHTML = '';
  }

  onScroll(event) {
    const scrollTop = this.textArea.nativeElement.scrollTop;
    this.backgroundArea.nativeElement.scrollTop = scrollTop;
  }

  ngAfterViewInit(){
    this.searchService.Highlights.subscribe(newHighlight=>{
      this.highlights.nativeElement.innerHTML = newHighlight;
    });
    this.dataService.currentDoc.subscribe(newDoc=>{
      this.doc = newDoc;
      this.textArea.nativeElement.innerHTML = newDoc.content;
     });
     this.searchService.Highlights.subscribe(newVal=>{
       this.highlights.nativeElement.innerHTML = newVal;
     });
  }

  ngOnInit(): void {
   
  }

}
