import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-quiz',
  templateUrl: './update-quiz.component.html',
  styleUrls: ['./update-quiz.component.css']
})
export class UpdateQuizComponent implements OnInit {

  constructor(private activatedroute:ActivatedRoute,
              private quizService:QuizService,
              private categoryService:CategoryService,
              private router:Router
              ) { }
  quiz=
  {
    "id": '',
    "title": "",
    "description": "",
    "maxMark": '',
    "noOfQuestion": '',
    "active":true,
    "category": {
        "id": '',
        "title": "",
        "description": ""
    }
  }
  id:any;
  //quiz:any
  category:any
  ngOnInit(): void {
    this.id = this.activatedroute.snapshot.paramMap.get('id')
    this.setQuiz();
    this.setCategory()
    console.log(this.quiz)
  }
  //setting the quiz data
   public setQuiz()
   {
     this.quizService.getQuizById(this.id).subscribe({
      next:(data:any)=>{
        this.quiz=data;
        console.log(this.quiz);
      },
      error:(e)=>{
        console.log(e);
      }
     })
   }
   //getting all category
   public setCategory()
   {
      this.categoryService.getCategories().subscribe({
        next:(data)=>{
          this.category=data;
          console.log(this.category);
        },
        error:(e)=>{
          console.log(e);
        }
      })
   }

   //updating quiz
   public formSubmit(addQuizForm:NgForm){
    this.quizService.updateQuiz(this.quiz).subscribe({
      next:(data)=>{
        //this.quiz=data;
        console.log('updated');
        Swal.fire('Thank you...', 'Quiz Updated succesfully!', 'success').then((response)=>{
             this.router.navigate(["/admin-dashboard/quizzes"])
        })
      },
      error:(e)=>{
        console.log(e);
        Swal.fire('Sorry...', 'Something went wrong!', 'error')
      }
     })
   }


}
