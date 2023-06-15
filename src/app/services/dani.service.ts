import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DaniService {
  private DaniUrl = 'assets/json/dani.json';

  constructor(private http: HttpClient) { }

  getDani(): Observable<any> {
    return this.http.get<any>(this.DaniUrl);
  }
}

