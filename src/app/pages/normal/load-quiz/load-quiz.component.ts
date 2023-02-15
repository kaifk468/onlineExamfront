import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-load-quiz',
  templateUrl: './load-quiz.component.html',
  styleUrls: ['./load-quiz.component.css']
})
export class LoadQuizComponent implements OnInit {

  constructor(private quizService:QuizService,
              private activatedRoute:ActivatedRoute,
              private router:Router

    ) { }
  
  quizzes:any=[]
  categoryId:any;
  ngOnInit(): void {
    
    //console.log(this.categoryId)
    this.getCategoryId();
  }
  ///to get category Id subscription is nessasory orther wise cat id will no change more then one time
  public getCategoryId()
  {
    this.activatedRoute.params.subscribe({
      next:(data:any)=>{
           this.categoryId=data.id;//setting the categoryId every time it change in url
           //if catID ==0 we display all quiz
           if(this.categoryId==0)
           {
             this.getAllQuizzes();
           }else{
             this.getQuizzesOfCategory()
           }
          // this.router.navigate(['normal-dashboard/load-quiz/'])
          console.log(this.categoryId);
      },
      error:(e)=>console.log(e)
    })
  }
  //get all quiz avilable to user
  public getAllQuizzes()
  {
    this.quizService.getAllActiveQuizzes().subscribe({
      next:(data)=>{
        
          console.log(data);
          this.quizzes=data;
      },
      error:(e)=>console.log(e)
    })
  }
  //get quiz of specific category
  public getQuizzesOfCategory()
  {
    this.quizService.getQuizByCategory(this.categoryId).subscribe({
      next:(data)=>{
          console.log(data);
          this.quizzes=data;
      },
      error:(e)=>console.log(e)
    })
  }

  

}
