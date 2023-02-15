import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-question',
  templateUrl: './update-question.component.html',
  styleUrls: ['./update-question.component.css']
})
export class UpdateQuestionComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute,
    private questionService:QuestionService,
    private router:Router,

) { }
  qustionId:any;
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
    this.qustionId=this.activatedRoute.snapshot.paramMap.get('id');
    this.questionService.getQuestionById(this.qustionId).subscribe({
      next:(data:any)=>{
        this.question=data;
        console.log(this.question)
      },
      error:(e)=>console.log(e)
    })
  }
//updating question data
  updateQuestion(questionForm:NgForm){
    this.questionService.updateQuestion(this.question).subscribe({
      next:(data:any)=>{
       // this.question=data;
        console.log(this.question)
        console.log('updated')
        Swal.fire('Thank you..',`Question updated`,'success').then((response)=>{
          this.router.navigate(['admin-dashboard/quizzes'])
        })
      },
      error:(e)=>console.log(e)
    })
  }

}
