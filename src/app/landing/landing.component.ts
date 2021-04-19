import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';
import { DocInfo, UserDocIndex } from '../docs.model';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor(
    private dataService: DataService,
    private router: Router
  ) { }

  newFileTitle: string = '';

  userDocIndex: UserDocIndex;

  onSaveOffline($event: Event) {
    $event.stopPropagation();
    const docOfflineId = this.dataService.generateNewDoc(this.newFileTitle);
    this.newFileTitle = '';
    this.router.navigate([`document/${docOfflineId}`]);
  }

  onDocRemove(offlineId: string, $event: Event) {
    $event.stopPropagation();
    this.dataService.removeOfflieDoc(offlineId);
  }

  onLoadOfflineDoc(offlineId: string) {
    this.router.navigate([`document/${offlineId}`]);
  }

  ngOnInit(): void {
    this.dataService.userDocIndex.subscribe(index => {
      this.userDocIndex = index;
    });
  }

}
