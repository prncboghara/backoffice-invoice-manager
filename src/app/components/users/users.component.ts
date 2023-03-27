import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users/users.service';

export interface IUser {
  email: String,
  name: String,
  is_active: Boolean
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {

  constructor(private userSvc:UsersService) { }

  users: IUser[] = [] 
  isFound: Boolean = false

  ngOnInit(): void {
    this.getUsers()
  }

  getUsers() {
    this.isFound = false;
    this.userSvc.getUsers().subscribe((res: {users:IUser[]}) => {
      this.users = res.users
      if(this.users && this.users.length) this.isFound = true
      console.log(this.isFound)
    }, err => {
      this.isFound = false
    })
  }
  

}
