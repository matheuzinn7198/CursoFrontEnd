import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurriculoService {
  private baseUrl = 'http://localhost:3009/curriculos';

  constructor(private http: HttpClient) {}

  getCurriculos(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }

  getCurriculoById(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${id}`);
  }

  createCurriculo(curriculo: any): Observable<any> {
    return this.http.post<any>(this.baseUrl, curriculo);
  }

  updateCurriculo(curriculo: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/${curriculo.id}`, curriculo);
  }

  deleteCurriculo(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
