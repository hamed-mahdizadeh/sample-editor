import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ActiveSidebar } from '../docs.model';

@Injectable({
  providedIn: 'root'
})
export class EditorContainerService {

  constructor() { }

  private _activeSidebar: ActiveSidebar = '';

  activeSidebar = new BehaviorSubject<ActiveSidebar>(this._activeSidebar);
}
