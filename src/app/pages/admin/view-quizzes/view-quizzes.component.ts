import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-quizzes',
  templateUrl: './view-quizzes.component.html',
  styleUrls: ['./view-quizzes.component.css']
})
export class ViewQuizzesComponent implements OnInit {

  quizzes=[ {
    "id": '',
    "title": "",
    "description": "",
    "maxMark": '',
    "noOfQuestion": '',
    "category": {
        "id": '',
        "title": "",
        "description": ""
    }
}];
  constructor(private quizService:QuizService) { }

  ngOnInit(): void {
    this.showAllQuiz();
  }

  public deleteQuiz(qId:any)
  {
    Swal.fire({
      icon:'info',
      title:'are u sure ?',
      confirmButtonText:'Delete',
      showCancelButton:true
    }).then((result)=>{
      if(result.isConfirmed)
      {
        //deleting the quiz
        this.quizService.deleteQuiz(qId).subscribe({
          next:(data)=>{
            console.log(data);
            this.quizzes=this.quizzes.filter((quiz)=>quiz.id!=qId);
            //this.showAllQuiz();
          },
          error:(e)=>{
            console.log(e);
          }
        })

      }
    })
  }

  public showAllQuiz(){
    this.quizService.getQuizzes().subscribe({
      next:(data:any)=>{
        console.log(data);
        this.quizzes=data;
      },
      error:(e)=>{
        console.log(e);
      }
    })
  }

}
