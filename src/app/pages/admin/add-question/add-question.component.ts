import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute,
              private questionService:QuestionService,

    ) { }

  quizId:any;
  quizTitle:any;
  question={
    "content":"",
    "option1":"",
    "option2":"",
    "option3":"",
    "option4":"",
    "answer":"",
    "quiz":{
        "id":""
    }
}
  ngOnInit(): void {
    this.quizId=this.activatedRoute.snapshot.paramMap.get('quizId');
    this.quizTitle=this.activatedRoute.snapshot.paramMap.get('quizTitle');
    this.question.quiz['id']=this.quizId;

    console.log(this.quizId+''+this.quizTitle)
  }

  public addQuestion(questionForm:NgForm)
  {
    console.log(this.question)
    this.questionService.addQuestion(this.question).subscribe({
      next:(data)=>{
        console.log(data);
        Swal.fire('Thank you..',`Question added to Quiz of ${this.quizTitle}`,'success')
        questionForm.reset();
      },
      error:(e)=>{
        console.log(e);
        Swal.fire('Sorry..',`Something went wrong!`,'error')
      }
    })
  }

}
