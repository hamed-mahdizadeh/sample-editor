import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditorContaiterComponent } from './editor-container/editor-contaiter.component';
import { LandingComponent } from './landing/landing.component';

const routes: Routes = [
  {path: 'document/:id', component: EditorContaiterComponent},
  {path: '', component: LandingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
