import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DocInfo, OfflineDoc, UserDocIndex } from './docs.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
  ) {
    const userDocIndex = this.getUserDocIndex();
    this.userDocIndex.next(userDocIndex);
   }

  //Test user name for storing offline Docs per user
  private currentUser = {
    userCode: 'a1Q2e'
  }

  userDocIndex = new BehaviorSubject<UserDocIndex>(null);

  docOfflineId: string;

  currentDoc = new BehaviorSubject<OfflineDoc>(null);

  private randomOfflineId(): string {
    return Math.floor(Math.random() * 10000000).toString(36);
  }

  getUserDocIndex() {
    let currentUseDocIndexStr = localStorage.getItem(this.currentUser.userCode);
    let currentUseDocIndex: UserDocIndex;
    if (currentUseDocIndexStr) {
      currentUseDocIndex = JSON.parse(currentUseDocIndexStr);
    } else {
      currentUseDocIndex = {
        docIndex: []
      }
    }
    return currentUseDocIndex;
  }

  removeDocIndexItem(offlineId: string){
    const index = this.getUserDocIndex();
    index.docIndex = index.docIndex.filter(i=>i.offlineId !== offlineId);
    localStorage.setItem(this.currentUser.userCode, JSON.stringify(index));
    this.userDocIndex.next(index);
  }

  generateNewDoc(docTitle: string) {
    const newDoc: OfflineDoc = {
      offlineId: this.randomOfflineId(),
      title: docTitle,
      createdDate: new Date(),
      lastModifiedDate: new Date(),
      content: '',
    };
    let currentUseDocIndex = this.getUserDocIndex();
    currentUseDocIndex.docIndex.push({
      offlineId: newDoc.offlineId,
      title: newDoc.title,
        lastModifiedDate: newDoc.lastModifiedDate,
        createdDate: newDoc.createdDate
    });
    let currentUseDocIndexStr = JSON.stringify(currentUseDocIndex);
    localStorage.setItem(
      this.currentUser.userCode,
      currentUseDocIndexStr
    );
    const newDocStr = JSON.stringify(newDoc);
    localStorage.setItem(newDoc.offlineId, newDocStr);
    this.userDocIndex.next(currentUseDocIndex);
    return newDoc.offlineId;
  }

  getDoc(offlineId: string): OfflineDoc {
    const docStr = localStorage.getItem(offlineId);
    return JSON.parse(docStr);
  }

  loadDoc(offlineId: string) {
    const doc = this.getDoc(offlineId);
    this.currentDoc.next(doc);
  }

  saveDoc(doc: OfflineDoc) {
    localStorage.setItem(doc.offlineId, JSON.stringify(doc));
  }

  removeOfflieDoc(offlineId: string){
    this.removeDocIndexItem(offlineId);
    localStorage.removeItem(offlineId);
  }
}
