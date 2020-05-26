import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  name=''
  welcomeMessage:string
  constructor(
    private route:ActivatedRoute,   // dependency to accept parameter from the url
    private welcomeDataService:WelcomeDataService
  ) { }

  ngOnInit() {
    this.name=this.route.snapshot.params['name']
    // console.log(this.route.snapshot.params['name']);
    
  }

  getWelcomeMessage(){
   // console.log("welcome message");
    console.log( this.welcomeDataService.executeHelloWorldBeanService());
    this.welcomeDataService.executeHelloWorldBeanService().subscribe(
      response=>this.handleSuccessResponse(response),
      error=>this.handleErrorResponse(error)
      
    );
    
  }
  getWelcomeMessageWithParam(){
    // console.log("welcome message");
    // console.log( this.welcomeDataService.executeHelloWorldServiceWithPathVariable(this.name));
     this.welcomeDataService.executeHelloWorldServiceWithPathVariable(this.name).subscribe(
       response=>this.handleSuccessResponse(response),
       error=>this.handleErrorResponse(error)
       
     );
     
   }

  handleSuccessResponse(response){
    this.welcomeMessage=response.message
  }

  handleErrorResponse(error){
    this.welcomeMessage=error.error.message
  }

}
