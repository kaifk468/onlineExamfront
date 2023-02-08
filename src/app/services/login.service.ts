import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  public loginStatusSubject=new Subject<boolean>();//this subject will notify all its suscribers 
                                                    //when its value get change
  //generate Token : this method will request backend for token
  public generateToken(user:any)
  {
    return this.http.post(`${baseUrl}/generate-token`,user)
  }
  //get the details of active user from backend
  public getCurrentUser()
  {
    return this.http.get(`${baseUrl}/current-user`);
  }

  // set Token to local stroge
  public setToken(token:string)
  {
    localStorage.setItem("token",token);
  }

  //set userDeatials in local strograe

  public setUser(user:any)
  {
    localStorage.setItem("userDetails",JSON.stringify(user));
  }

  //get user token
  public getToken()
  {
    let token=localStorage.getItem("token");
    return token;
  }
  
  //get userDetails
  public getUser()
  {
    let user=localStorage.getItem("userDetails");
    if(user!=null)
    return JSON.parse(user);
    else{
      this.logOut();
      return null;
    }
  }

  //get User Role
  public getUserRole()
  {
    let user=this.getUser();
    if(user!=null)
    {
      return user.authorities[0].authority;
    }
  }
  
  // is user loggedIn
  public isLoggedIn()
  {
    let token=localStorage.getItem("token");
    if(token!=null && token.length>0)return true
    return false;
  }

  //logOut user
  public logOut()
  {
    localStorage.removeItem("token");
    localStorage.removeItem("userDetails");
    return true;
  }





}
