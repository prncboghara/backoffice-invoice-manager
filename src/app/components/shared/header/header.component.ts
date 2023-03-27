import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  checkIsLoggedIn: boolean = this.authSvc.checkIsLoggedIn;
  constructor(private authSvc:AuthService, private router:Router) { }

  ngOnInit(): void {
    this.authSvc.changedLoginStatus.subscribe(res => {
      this.checkIsLoggedIn =  res;
    })
  }

  navigate(url) {
    this.router.navigate([url])
  }

  toggleSidebar() {
    const nav = document.getElementById("nav-bar")
    const header = document.getElementById("header")
    const wrapper = document.getElementById("wrapper")
    nav.classList.toggle('show')
    header.classList.toggle('body-pd')
    wrapper.classList.toggle('body-pd')
  }

}
