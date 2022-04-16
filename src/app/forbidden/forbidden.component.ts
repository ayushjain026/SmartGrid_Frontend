import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-forbidden',
  templateUrl: './forbidden.component.html',
  styleUrls: ['./forbidden.component.css']
})
export class ForbiddenComponent implements OnInit {
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
