import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-view-categories',
  templateUrl: './view-categories.component.html',
  styleUrls: ['./view-categories.component.css']
})
export class ViewCategoriesComponent implements OnInit {

  constructor(private categoryService:CategoryService) { }

  categories=[
    {
      "id":"",
      "title":"hello",
      "description":"motho"
    }
  ];
  ngOnInit(): void {
    //showing all category at the time of componetn load
    this.showAllCategory();
  }

  //delete category
  public deleteCategory(catId:any)
  {
    this.categoryService.deleteCategory(catId).subscribe({
      next:(data)=>{
        console.log(data);
        this.showAllCategory();
      },
      error:(e)=>{
        console.log(e);
      }
    })
  }

  public showAllCategory()
  {
    this.categoryService.getCategories().subscribe(
      {
       next:(data:any)=>{
         this.categories=data;
         console.log(data);
         console.log(this.categories)
       },
       error:(e)=>{
         console.log(e);
       }
      }
     )
  }

}
