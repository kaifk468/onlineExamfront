import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';
import { MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private userService:UserService,private snack:MatSnackBar) { }

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
    if(this.user.userName=='' || this.user.userName==null)
    {
      this.snack.open('UserName can"t be empty !! ', 'Undo', {
        duration: 3000
      });
    }
    //console.log(this.user);

      //calling the createUser form usreService class to send the post req to backend
      this.userService.createUser(this.user).subscribe({
      next: (data:any) =>{
        console.log(data)
        Swal.fire({
          icon: 'success',
          title: 'Successfully Registerd !!',
          text: `${data.userName} Registered !`,
          footer: '<a href="">Why do I have this issue?</a>'
        })

      } ,
      
      error: (e) =>{
        console.error(e);
        this.snack.open('Something went wrong !!', 'Undo', {
          duration: 3000,
        });
      },
    }
      
    )

  }
}
