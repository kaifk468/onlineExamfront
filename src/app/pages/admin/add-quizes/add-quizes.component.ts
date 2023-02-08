import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryService } from 'src/app/services/category.service';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-quizes',
  templateUrl: './add-quizes.component.html',
  styleUrls: ['./add-quizes.component.css']
})
export class AddQuizesComponent implements OnInit {

  status:Boolean=false;
  quiz=
    {
      "id": '',
      "title": "",
      "description": "",
      "maxMark": '',
      "noOfQuestion": '',
      "active":this.status,
      "category": {
          "id": '',
          "title": "",
          "description": ""
      }
    }
    category=[
      {
      "id":'',
      "title":'',
      "description":''
    },
    {
      "id":'',
      "title":'',
      "description":''
    },]
    
  constructor(private quizService:QuizService,
            private categoryService:CategoryService,
            private snac:MatSnackBar
    
    ) { }

 
  ngOnInit(): void {
   this.loadCategory();
  }

  public formSubmit(addQuizForm:NgForm)
  {
    //console.log(this.category);
    //console.log("the status is "+this.status);
    if(this.quiz.title.trim()=='' || this.quiz.title.trim()==null)
    {
           this.snac.open("Title Requires!",'',{
            duration:3000,
           })
           return;
    }
    this.quizService.addQuiz(this.quiz).subscribe({
      next:(data)=>{
        console.log(data);
        addQuizForm.reset()
        Swal.fire('Thank you...', 'Quiz added succesfully!', 'success')
      },
      error:(e)=>{
        console.log(e);
        addQuizForm.reset()
        Swal.fire('Sorry...', 'Server error!', 'error')
      }
    })
  }
  //it wiil load all category
  public loadCategory()
  {
    this.categoryService.getCategories().subscribe({
      next:(data:any)=>{
        console.log(data);
        this.category=data;
      },
      error:(e)=>{
        console.log(e);
        Swal.fire('Sorry...', 'Unable to load category!', 'error')
      }
    })
  }


}
