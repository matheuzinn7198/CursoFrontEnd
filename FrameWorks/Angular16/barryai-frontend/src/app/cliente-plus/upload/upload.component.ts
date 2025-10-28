import { Component } from '@angular/core';

@Component({
  selector: 'app-upload',
  template: `
    <div style="max-width: 500px; margin: 40px auto; padding: 24px; background: white; border-radius: 12px;">
      <h2>Upload de Arquivos</h2>
      <p>Envie PDFs, imagens ou ZIPs para análise.</p>
      
      <div style="border: 2px dashed #ccc; padding: 40px; text-align: center; margin: 20px 0; cursor: pointer;"
           (click)="fileInput.click()">
        <p>📁 Clique para selecionar um arquivo</p>
        <input #fileInput type="file" style="display: none;" (change)="onFileSelected($event)">
      </div>

      <div *ngIf="fileName">
        <strong>Arquivo:</strong> {{ fileName }}
      </div>

      <button (click)="upload()" [disabled]="!fileName" 
              style="background: #3AAED8; color: white; border: none; padding: 10px 20px; border-radius: 4px; margin-top: 10px;">
        Enviar para Análise
      </button>
    </div>
  `,
  styles: []
})
export class UploadComponent {
  fileName = '';

  onFileSelected(event: any) {
    if (event.target.files.length > 0) {
      this.fileName = event.target.files[0].name;
    }
  }

  upload() {
    alert(`Arquivo "${this.fileName}" enviado!`);
    this.fileName = '';
  }
}