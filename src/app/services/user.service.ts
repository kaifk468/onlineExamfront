import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

//this method will send post request to the backend with user object
  public createUser(user:any)
  {
    return this.http.post(`${baseUrl}/user/`,user);
  }
}
