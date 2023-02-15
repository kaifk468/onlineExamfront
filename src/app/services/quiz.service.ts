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
  //get all quizs both active and inactive
  public getQuizzes()
  {
    return this.http.get(`${baseUrl}/quiz/`);
  } 

  //get all active quizzes
  public getAllActiveQuizzes()
  {
    return this.http.get(`${baseUrl}/quiz/active`)
  }
  //get Quizes of specific category
  public getQuizByCategory(categoryId:any)
  {
    return this.http.get(`${baseUrl}/quiz/category/${categoryId}`)
  }

  //delete quiz
  public deleteQuiz(quizId:any)
  {
    return this.http.delete(`${baseUrl}/quiz/${quizId}`);
  }

  
}
