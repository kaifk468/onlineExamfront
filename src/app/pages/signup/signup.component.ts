import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

    // private int id;
    // private String firstName;
    // private String lastName;
    // private String userName;
    // private String email;
    // private String profilePic;
    // private boolean enabled=true;
    // private String phone;


    //this is the object of user registratin fiel this object is binded with registion field
    public user={
      firstName:'',
      lastName:'',
      userName:'',
      email:'',
      password:'',
      phone:''
    };
  formSubmit()
  {
    alert('im  woking');
    console.log(this.user);
  }
}
