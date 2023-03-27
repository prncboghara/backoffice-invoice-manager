import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReleaseService {

  constructor(private http: HttpClient) { }
  url: string = `${environment.end_point}/releases`;

  getAllReleases() {
    return this.http.get(`${this.url}`);
  }

  getReleaseById(id:string) {
    return this.http.get(`${this.url}/${id}`);
  }

  createRelease(body) {
    return this.http.post(`${this.url}/create`, body);
  }

  updateRelease(body) {
    return this.http.put(`${this.url}/update/${body._id}`, body);
  }

  makeCurrentVersion(id) {
    return this.http.put(`${this.url}/make-current/${id}`, {});
  }

  deleteRelease(id){
    return this.http.delete(`${this.url}/delete/${id}`);
  }
}