import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Diary } from 'src/app/list-diaries/list-diaries.component';
import { API_URL,DIARY_JPA_API_URL } from 'src/app/app.constants';

@Injectable({
  providedIn: 'root'
})
export class DiaryDataService {

  constructor(
    private http:HttpClient
  ) { }

  retriveAllDiaries(username){
    return this.http.get<Diary[]>(`${DIARY_JPA_API_URL}/users/${username}/diaries`)
    // console.log("executeHelloWorldBeanService");
    
  }

  deleteDiary(username, id){
    return this.http.delete(`${DIARY_JPA_API_URL}/users/${username}/diaries/${id}`)
  }

  retrieveDiary(username, id){
    return this.http.get<Diary>(`${DIARY_JPA_API_URL}/users/${username}/diaries/${id}`)
  }

  updateDiary(username, id, diary){
    return this.http.put(`${DIARY_JPA_API_URL}/users/${username}/diaries/${id}`, diary)
  }


  createDiary(username, diary){
    return this.http.post(`${DIARY_JPA_API_URL}/users/${username}/diaries`, diary)
  }
}
