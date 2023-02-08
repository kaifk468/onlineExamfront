import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private http:HttpClient) { }

  //add quiz
  public addQuiz(quiz:any)
  {
    return this.http.post(`${baseUrl}/quiz/`,quiz);
  }
  //update quiz
  public updateQuiz(quiz:any)
  {
    return this.http.put(`${baseUrl}/quiz/`,quiz)
  }
  //get quiz by id
  public getQuizById(quizId:any)
  {
    return this.http.get(`${baseUrl}/quiz/${quizId}`);
  }
  //get all quizs
  public getQuizzes()
  {
    return this.http.get(`${baseUrl}/quiz/`);
  }

  //delete category
  public deleteQuiz(quizId:any)
  {
    return this.http.delete(`${baseUrl}/quiz/${quizId}`);
  }

  
}
