import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private loginservice:LoginService) { }
  user:any=null;
  role:any=null;
  ngOnInit(): void {
    this.user=this.loginservice.getUser();
    this.role=this.loginservice.getUserRole();
  }

}
