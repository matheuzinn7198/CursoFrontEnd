import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ClientePlusRoutingModule } from './cliente-plus-routing.module';
import { IaChatPlusComponent } from './ia-chat-plus/ia-chat-plus.component';
import { UploadComponent } from './upload/upload.component';

@NgModule({
  declarations: [IaChatPlusComponent, UploadComponent],
  imports: [CommonModule, FormsModule, ClientePlusRoutingModule]
})
export class ClientePlusModule { }