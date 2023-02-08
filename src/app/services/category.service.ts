import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) { }

  //add category
  public addCategory(category:any)
  {
    return this.http.post(`${baseUrl}/category/`,category);
  }
  //get category by id
  public getCategoryById(categoryId:any)
  {
    return this.http.get(`${baseUrl}/category/${categoryId}`);
  }
  //get all Categories
  public getCategories()
  {
    return this.http.get(`${baseUrl}/category/`);
  }

  //delete category
  public deleteCategory(categoryId:any)
  {
    return this.http.delete(`${baseUrl}/category/${categoryId}`);
  }

  

}
