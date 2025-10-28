import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IaChatPlusComponent } from './ia-chat-plus/ia-chat-plus.component';
import { UploadComponent } from './upload/upload.component';

const routes: Routes = [
  { path: 'chat', component: IaChatPlusComponent },
  { path: 'upload', component: UploadComponent },
  { path: '', redirectTo: 'chat', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientePlusRoutingModule { }