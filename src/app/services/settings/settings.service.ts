import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  constructor(private http: HttpClient) { }
  url: string = `${environment.end_point}/settings`;

  getAllSettings() {
    return this.http.get(`${this.url}`);
  }

  getSettingById(id: string) {
    return this.http.get(`${this.url}/${id}`);
  }

  createSetting(body) {
    return this.http.post(`${this.url}`, body);
  }

  updateSetting(body) {
    return this.http.put(`${this.url}/update/${body._id}`, body);
  }

  deleteSetting(id) {
    return this.http.delete(`${this.url}/delete/${id}`);
  }

  makeCurrentVersion(id) {
    return this.http.put(`${this.url}/make-active/${id}`, {});
  }
}