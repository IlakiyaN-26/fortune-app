import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/auth/services/user.service'; 
interface User {
  _id: string;
  name: string;
  email: string;
}

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  users: User[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.getUserDetails();
  }

  getUserDetails(): void {

    this.userService.getUsers().subscribe({
      next: (response) => {
        this.users = response.data;
      },
      error: (error) => {
        console.error('Error fetching users:', error);
      }
    });

  }
}