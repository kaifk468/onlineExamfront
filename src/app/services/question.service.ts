import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http:HttpClient) { }

  //adding question
  public addQuestion(question:any)
  {
     return this.http.post(`${baseUrl}/question/`,question);
  }
  //updation quesion
  public updateQuestion(question:any)
  {
     return this.http.put(`${baseUrl}/question/`,question);
  }

  //get question by quiz
  public getAllQuestionOfQuiz(qId:any)
  {
    return this.http.get(`${baseUrl}/question/quiz/all/${qId}`)
  }
 //get question by id
  public getQuestionById(quesionId:any)
  {
    return this.http.get(`${baseUrl}/question/${quesionId}`)
  }

  //delete question
  public deleteQuestionById(quesionId:any)
  {
    return this.http.delete(`${baseUrl}/question/${quesionId}`)
  }
}
