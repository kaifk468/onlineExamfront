import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-user-side-bar',
  templateUrl: './user-side-bar.component.html',
  styleUrls: ['./user-side-bar.component.css']
})
export class UserSideBarComponent implements OnInit {

  constructor(private categoryService:CategoryService) { }

  categories:any=[];
  ngOnInit(): void {
    this.getAllCategory();
  }

  public getAllCategory()
  {
    this.categoryService.getCategories().subscribe({
      next:(data)=>{
        console.log(data);
        this.categories=data;
      },
      error:(e)=>console.log(e)
    })
  }

}
