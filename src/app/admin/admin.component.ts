import { Component, OnInit } from '@angular/core';

import { UserService } from '../user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  user:any
  constructor(private userService:UserService) { }

  ngOnInit(): void {
  }

  getUser()
  {
    
    this.userService.getUser().subscribe(
      user=>{
        console.log(user)
      },
      error=>{
        console.log(error)
      }
    )
  }

}
