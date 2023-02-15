import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pre-quiz-instruction',
  templateUrl: './pre-quiz-instruction.component.html',
  styleUrls: ['./pre-quiz-instruction.component.css']
})
export class PreQuizInstructionComponent implements OnInit {

  quizId:any;
  quiz:any;
  constructor(private activatedRoute:ActivatedRoute,
              private quizService:QuizService,
              private router:Router
              
              ) { }

  ngOnInit(): void {
    this.quizId=this.activatedRoute.snapshot.paramMap.get('id');
    this.getQuiz();
  }
  public getQuiz()
  {
    this.quizService.getQuizById(this.quizId).subscribe({
      next:(data)=>{
        this.quiz=data;
        console.log(this.quiz);
      },
      error:(e)=>{
        console.log(e);
      }
    })
  }

  //warnig to start the quiz
  public startQuiz()
  {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, continue'
    }).then((result) => {
      if (result.isConfirmed) {
        this.router.navigate(['/start-quiz/'+this.quizId])
      }
    })
  }


}
