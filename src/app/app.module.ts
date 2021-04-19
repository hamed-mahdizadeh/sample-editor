import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { SearchComponent } from './editor-container/search/search.component';
import { NavbarComponent } from './editor-container/navbar/navbar.component';
import { EditorComponent } from './editor-container/editor/editor.component';
import { EditorContaiterComponent } from './editor-container/editor-contaiter.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    SearchComponent,
    NavbarComponent,
    EditorComponent,
    EditorContaiterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
