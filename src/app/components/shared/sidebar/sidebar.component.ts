import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private router: Router, private authSvc: AuthService) { }
  menus: { label: string, routing: string, icon: string }[] = [{
    label: "Dashboard",
    routing: "/dashboard",
    icon: "bx-grid-alt"
  }, {
    label: "Users",
    routing: "/users",
    icon: "bx-user"
  }, {
    label: "Releases",
    routing: "/releases",
    icon: "bx-message-square-detail"
  }]
  active:string = '/dashboard';

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        let url = '/' + event.url.split("/")[1]
        if(url === '/invoice') url = url + 's'; // special case for invoice - generator
        this.active = url
      }
    })
  }

  navigate(url) {
    this.router.navigate([url])
  }

  logout() {
    this.authSvc.changeLoggedIn(false)
    localStorage.removeItem('token')
    this.router.navigate(['/login'])
  }

}
