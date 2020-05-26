import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from 'src/app/app.constants';

export class HelloWorldBean{
  constructor(public message:string){}
}


@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(
    private http:HttpClient
  ) { }


  executeHelloWorldBeanService(){
    return this.http.get<HelloWorldBean>(`${API_URL}/hello-world-bean`)
    // console.log("executeHelloWorldBeanService");
    
  }

  //http://localhost:8080/hello-world/path-variable/sooraj

  executeHelloWorldServiceWithPathVariable(name){

    // let basicAuthHeaderString = this.createBasicAuthenticationHttpHeader()

    // let headers = new HttpHeaders({
    //   Authorization: basicAuthHeaderString
    // })

    return this.http.get<HelloWorldBean>(`${API_URL}/hello-world/path-variable/${name}`)
    // console.log("executeHelloWorldBeanService");
    
  }


  // createBasicAuthenticationHttpHeader(){
  //   let username = 'sooraj'
  //   let password =  'sooraj'
  //   let basicAuthHeaderString= 'Basic ' + window.btoa(username+':'+password)
  //   return basicAuthHeaderString;
  // }
}
