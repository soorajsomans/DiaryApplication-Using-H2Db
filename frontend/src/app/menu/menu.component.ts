import { Component, OnInit } from '@angular/core';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  // isUserLoggedIn: boolean =false;

  constructor(
    private hardcodedAuthentcationService:HardcodedAuthenticationService
  ) { }

  ngOnInit() {
  //  this.isUserLoggedIn =  this.hardcodedAuthentcationService.isUserLoggedIn();
  //  console.log(this.isUserLoggedIn)
  }

}
