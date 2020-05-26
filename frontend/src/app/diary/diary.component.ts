import { Component, OnInit } from '@angular/core';
import { DiaryDataService } from '../service/data/diary-data.service';
import { Diary } from '../list-diaries/list-diaries.component';
import { ActivatedRoute, Router } from '@angular/router';
import { BasicAuthenticationService } from '../service/basic-authentication.service';

@Component({
  selector: 'app-diary',
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.css']
})
export class DiaryComponent implements OnInit {

  id:number
  diary:Diary
  constructor(
    private diaryService:DiaryDataService,
    private route:ActivatedRoute,
    private router:Router,
    private basicAuthenticationService:BasicAuthenticationService
  ) { }

  username = this.basicAuthenticationService.getAuthenticatedUser()
  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.diary = new Diary(this.id,'','',new Date())

    if(this.id != -1){
    this.diaryService.retrieveDiary(this.username,this.id).subscribe(
      data=>this.diary = data
    )
  }
}
  saveDiary(){
    if(this.id == -1){
      this.diaryService.createDiary(this.username,this.diary).subscribe(
        data=> {
          console.log(data)
          this.router.navigate(['diaries'])
        }
      )
    }
    else{
    this.diaryService.updateDiary(this.username,this.id,this.diary).subscribe(
      data=> {
        console.log(data)
        this.router.navigate(['diaries'])
      }
    )
  }
}

}
