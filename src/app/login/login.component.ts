import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  correctUsername: string;
  correctPassword: string;
  loginFailed: boolean;
  loginCheck: boolean;

  constructor(private router: Router) {
    this.loginFailed = false;
    this.loginCheck = false;
    this.username = "";
    this.password = "";
    this.correctUsername = "cypressUser"
    this.correctPassword = "cypress123"
  }

  ngOnInit() {
  }

  clearFields() {    
    this.username = "";
    this.password = "";
    this.loginCheck = false;
    this.loginFailed = false;
  }

  submit() {
    if(this.correctUsername === "cypressUser" && this.correctPassword === "cypress123" && this.loginCheck) {
      this.loginFailed = false;
      this.router.navigate(["/home"]);
    }
    else {
      this.loginFailed = true;
    }
    
  }

}
