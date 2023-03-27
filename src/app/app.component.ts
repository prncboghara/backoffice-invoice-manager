import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AuthService } from './services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  isAuthRoutes: boolean = false;
  checkIsLoggedIn:boolean = this.authSvc.checkIsLoggedIn;
  authRoutes: string[] = ['/login', '/register', '/forgot-password', '/activate-account', '/change-password']

  constructor(private router: Router, private authSvc:AuthService) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const url = event.url.split("?")[0]
        if (this.authRoutes.includes(url))
          this.isAuthRoutes = true;
        else
          this.isAuthRoutes = false;
      }
    });
  }

  ngOnInit() {
    this.checkIsLoggedIn = this.authSvc.checkIsLoggedIn
    this.authSvc.changedLoginStatus.subscribe(res => {
      this.checkIsLoggedIn =  res;
    })
  }
}