import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EditorContainerService } from './editor-container.service';
import { ActiveSidebar } from '../docs.model';
import { DataService } from '../data.service';

@Component({
  selector: 'app-editor-contaiter',
  templateUrl: './editor-contaiter.component.html',
  styleUrls: ['./editor-contaiter.component.css']
})
export class EditorContaiterComponent implements OnInit {

  constructor(
    private editorContainerService: EditorContainerService,
    private dataService: DataService,
    private route: ActivatedRoute
    ) { }

  activeSidebar: ActiveSidebar;
  docId: string;

  ngOnInit(): void {
    this.docId = this.route.snapshot.paramMap.get('id');
    this.dataService.loadDoc(this.docId);
    this.editorContainerService.activeSidebar.subscribe(activeItem=>{
      this.activeSidebar = activeItem
    });
  }

}
