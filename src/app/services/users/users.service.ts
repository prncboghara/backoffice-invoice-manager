import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }
  url: string = `${environment.end_point}/users`;

  getUsers() {
    return this.http.get(`${this.url}`);
  }
}
