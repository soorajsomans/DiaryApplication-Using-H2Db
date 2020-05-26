import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';
import { BasicAuthenticationService } from '../service/basic-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'sooraj'
  password = ''
  errorMessage = 'Invalid Username or password!'
  invalidLogin = false

  constructor(
    private router:Router,
    private hardcodedAuthenticationService:HardcodedAuthenticationService,
    private basicAuthenticationService:BasicAuthenticationService
    ) { }

  ngOnInit() {
  }

  handleLogin(){
    // console.log(this.username);
    //if(this.username === "sooraj" && this.password==="sooraj"){
    if(this.hardcodedAuthenticationService.authenticate(this.username, this.password)){
      this.router.navigate(['welcome',this.username])
      this.invalidLogin=false
    }else{
      this.invalidLogin=true
    }
    
  }


  handleBasicAuthLogin(){
    // console.log(this.username);
    //if(this.username === "sooraj" && this.password==="sooraj"){
    this.basicAuthenticationService.executeAuthenticationService(this.username, this.password).subscribe(
      data=>{
        console.log(data);
        this.router.navigate(['welcome',this.username])
        this.invalidLogin=false
      }, 

      error=>{
        console.log(error);
        this.invalidLogin=true
      }
    )

    
  }



  handleJWTAuthLogin(){
    // console.log(this.username);
    //if(this.username === "sooraj" && this.password==="sooraj"){
    this.basicAuthenticationService.executeJwtAuthenticationService(this.username, this.password).subscribe(
      data=>{
        console.log(data);
        this.router.navigate(['welcome',this.username])
        this.invalidLogin=false
      }, 

      error=>{
        console.log(error);
        this.invalidLogin=true
      }
    )

    
  }
}
