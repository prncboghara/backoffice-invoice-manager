import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AnalysisService {
  url: string = `${environment.end_point}/analysis`;
  constructor(private http: HttpClient) { }

  get() {
    return this.http.get(this.url);
  }
}
