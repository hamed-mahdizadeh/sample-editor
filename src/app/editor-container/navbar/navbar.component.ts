import { Component, OnInit } from '@angular/core';
import { EditorContainerService } from '../editor-container.service';
import { ActiveSidebar } from '../../docs.model';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private editorContainerService: EditorContainerService,
    private dataservice: DataService) { }

  _activeSidebar: ActiveSidebar;


  onToggleSearchbar() {
    this._activeSidebar = this._activeSidebar !== 'search' ? 'search' : '';
    this.editorContainerService.activeSidebar.next(this._activeSidebar);
  }

  onSaveDoc(){
    this.dataservice.saveDoc(this.dataservice.currentDoc.value);
  }

  ngOnInit(): void {
    
  }

}
