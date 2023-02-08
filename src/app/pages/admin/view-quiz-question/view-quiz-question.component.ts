import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';

@Component({
  selector: 'app-view-quiz-question',
  templateUrl: './view-quiz-question.component.html',
  styleUrls: ['./view-quiz-question.component.css']
})
export class ViewQuizQuestionComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute,
              private questionService:QuestionService,

              ) { }

  quizId:any;
  quizTitle:any;
  question:any=[];
  ngOnInit(): void {
    this.quizId=this.activatedRoute.snapshot.paramMap.get('id')
    this.quizTitle=this.activatedRoute.snapshot.paramMap.get('title')
    this.setQuestionByQuiz();
    console.log(this.quizId+''+this.quizTitle)
  }

  //setting all quest of quiz
  public setQuestionByQuiz()
  {
    this.questionService.getAllQuestionOfQuiz(this.quizId).subscribe({
      next:(data)=>{
        console.log(data);
        this.question=data;
      },
      error:(e)=>{
        console.log(e);
      }
    })
  }



}
