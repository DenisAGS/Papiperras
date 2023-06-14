import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProblemasServices {
  private jsonUrl = 'assets/json/problemas.json'; // Ruta al archivo JSON

  constructor(private http: HttpClient) {}

  getJsonData(): Observable<any> {
    return this.http.get<any>(this.jsonUrl);
  }

  saveJsonData(data: any): Observable<any> {
    return this.http.put<any>(this.jsonUrl, data);
  }
}
