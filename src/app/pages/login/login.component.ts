import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public logInData={
    username:'',
    password:''
  };

  constructor(private loginservice:LoginService,private router:Router) { }

  ngOnInit(): void {
  }
  logIn()
  {
    if(this.logInData.username.trim()==null || this.logInData.username=='')
    {
      alert("username must be something ");
    }
    if(this.logInData.password.trim()==null || this.logInData.password=='')
    {
      alert("password must be something ");
    }

    this.loginservice.generateToken(this.logInData).subscribe({
      next:(data:any)=>{
        console.log(data);
        this.loginservice.setToken(data.token); //storing token to local
        this.loginservice.getCurrentUser().subscribe({  //getting active user from backend
          next:(userData:any)=>{
              this.loginservice.setUser(userData); //storing active user to local
              console.log(userData);
              //now we can redirect based on the Role
              let userRole=this.loginservice.getUserRole();
              this.loginservice.loginStatusSubject.next(true); //this will inform all its suscriber
              if(userRole=='Normal')///redirection to Normal User Page
              {
                this.router.navigate(['normal-dashboard']);
              }
              else if(userRole=='Admin')
              {
                
                this.router.navigate(['admin-dashboard']);
              }

          },
          error:(e)=>{
            console.log("No active User found")// if active user not found
          }
        })
        
        alert("u are logged IN");
      },
      error:(e)=>{
        console.log(e);
        alert("somethibg went wrog");
            }
    }
      
    )

    
  }

}
