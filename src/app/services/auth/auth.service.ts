import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }
  changedLoginStatus:EventEmitter<boolean> = new EventEmitter(false);
  url: string = `${environment.end_point}/auth`;

  changeLoggedIn(status:boolean) {
    this.changedLoginStatus.emit(status)
  }

  login(data: { email: string, password: string }) {
    return this.http.post(`${this.url}/login`, data);
  }

  register(data: { name: string, email: string, contact: string, password: string }) {
    return this.http.post(`${this.url}/register`, data);
  }

  activateAccount(data: { email: string, token: string }) {
    return this.http.put(`${this.url}/activate-account`, data);
  }

  current() {
    return this.http.get(`${this.url}/current`);
  }
  
  forgotPasword(data) {
    return this.http.put(`${this.url}/forgot-password`, data);
  }

  changePasword(data) {
    return this.http.put(`${this.url}/change-password`, data);
  }

  get checkIsLoggedIn(): boolean {
    const token = localStorage.getItem('token');
    return token ? true : false
  }
}
