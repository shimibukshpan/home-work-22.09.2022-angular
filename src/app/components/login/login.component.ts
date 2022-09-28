import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService:UserService ) { }

  ngOnInit(): void {
  }
  password:string='';
  email:string='';
  login(){
    this.userService.login(this.email, this.password)
  }

}
