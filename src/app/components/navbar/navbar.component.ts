import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLoggedIn:boolean=false;
  user:any=null;
  constructor(public loginService:LoginService) { }

  public logOut()
  {
    alert("logging out");
    this.loginService.logOut();
  }

  ngOnInit(): void {
    this.loginService.loginStatusSubject.asObservable().subscribe(
      (data)=>{
        console.log(`this is subject change ${data}`)
        this.isLoggedIn=this.loginService.isLoggedIn();
        this.user=this.loginService.getUser();
      }
    )
  }

}
