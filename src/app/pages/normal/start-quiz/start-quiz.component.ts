import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-start-quiz',
  templateUrl: './start-quiz.component.html',
  styleUrls: ['./start-quiz.component.css']
})
export class StartQuizComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute,
    private quizService:QuizService,
    private router:Router,
    private questionService:QuestionService,
    
    
    ) { }
  quizId:any;
  questions:any=[];
  totalMarks=0
  totalAttempted=0;
  correctAns=0;
  eachQuestionMark=0;
  isSubmited=false;
  totalTime=0;
  avilableTime=0;
  windowTimer:any;
  ngOnInit(): void {
    this.quizId=this.activatedRoute.snapshot.paramMap.get('id')
    this.getQuiz()
    this.getQuestionOfQuiz();

  }

  public getQuiz()
  {
    this.quizService.getQuizById(this.quizId).subscribe({
      next:(data:any)=>{
         
        this.eachQuestionMark=data.maxMark/data.noOfQuestion
        console.log(this.eachQuestionMark);
      },
      error:(e)=>console.log(e)
    })
  }
  public getQuestionOfQuiz()
  {
    this.questionService.getAllQuestionOfQuiz(this.quizId).subscribe({
      next:(data)=>{
        //console.log(this.quizId)
        this.questions=data;
        this.totalTime=this.questions.length*2*60;
        this.avilableTime=this.totalTime;
        this.quizTimer()
        this.questions.forEach((q:any)=>{
              q['givenAnswer']='';
        })
        //console.log(data)
        console.log(this.questions);
      },
      error:(e)=>console.log(e)
    })
  }
 //Evaluation of marks on submittion of Quiz
  public onQuizSubmit()
  {
    
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, submit'
    }).then((result) => {
      if (result.isConfirmed) {
          this.isSubmited=true;
        //evaluating the quiz
          clearInterval(this.windowTimer)
          this.questions.forEach((question:any)=>{
          if(question.givenAnswer===question.answer)
          {
            this.totalMarks+=this.eachQuestionMark;
            this.correctAns+=1;
            
          }
          this.totalAttempted+=1;
        })
      }
    })
    
    console.log(`total attempted question is ${this.totalAttempted} out of which 
    correct ans is ${this.correctAns} and your total mark is ${this.totalMarks}`)
  }

  public quizTimer(){
   this.windowTimer=window.setInterval((response:any)=>{
     this.avilableTime-=1;
     if(this.avilableTime<=0)
     {
       this.quizSubmitOnTimeOut()
       clearInterval(this.windowTimer);
     }
     console.log(this.avilableTime);
    },1000)
  }

  public timeFormetter()
  {
    let min=Math.floor(this.avilableTime/60);
    let sec=this.avilableTime-(min*60);
    return `${min} min: ${sec} sec`
  }

  //quiz submintin when timeOut
  public quizSubmitOnTimeOut()
  {
      this.isSubmited=true;
    //evaluating the quiz
       clearInterval(this.windowTimer);
      this.questions.forEach((question:any)=>{
      if(question.givenAnswer===question.answer)
      {
        this.totalMarks+=this.eachQuestionMark;
        this.correctAns+=1;
        
      }
      this.totalAttempted+=1;
    })
  }
  public print()
  {
    window.print()
  }

}
