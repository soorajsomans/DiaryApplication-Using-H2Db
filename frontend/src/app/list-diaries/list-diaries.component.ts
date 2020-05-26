import { Component, OnInit } from '@angular/core';
import { DiaryDataService } from '../service/data/diary-data.service';
import { Router } from '@angular/router';
import { BasicAuthenticationService } from '../service/basic-authentication.service';

export class Diary{
  constructor(
    public id : number,
    public title : String,
    public description : String,
    public diaryDate : Date
  ){}
}



@Component({
  selector: 'app-list-diaries',
  templateUrl: './list-diaries.component.html',
  styleUrls: ['./list-diaries.component.css']
})
export class ListDiariesComponent implements OnInit {
  
  message : string
  diaries :Diary[]
  
//   = [
//     new Diary(1,'My first Diary','today is a good day',new Date()),
//     new Diary(2,'My Second Diary','today is a good day',new Date()),
//     new Diary(3,'My Third Diary','today is a good day',new Date()),
//     new Diary(4,'My Forth Diary','today is a good day',new Date())
//     // {id :1,description : 'My first Diary'},
//     // {id :2,description : 'My Second Diary'},
//     // {id :3,description : 'My Third Diary'},

// ]

  constructor(
    private diaryService:DiaryDataService,
    private router:Router,
    private basicAuthenticationService:BasicAuthenticationService
  ) { }
  username = this.basicAuthenticationService.getAuthenticatedUser()

  ngOnInit() {
    this.refreshTodos()
  }

  refreshTodos(){
    this.diaryService.retriveAllDiaries(this.username).subscribe(
      response=>{
        this.diaries = response
      }
    )
  }

  deleteDiary(id){
    console.log(`Delete Diary ${id}`);
    this.diaryService.deleteDiary(this.username,id).subscribe(
      response=>{
        console.log(response);
        this.message = `Diary ${id} Successfully Deleted`
        this.refreshTodos()
      }
    )
  }


  updateDiary(id){
    this.router.navigate(['diaries',id])
  }

  addDiary(){
    this.router.navigate(['diaries',-1])
  }
}
