import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryService } from 'src/app/services/category.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';
@Component({
  selector: 'app-add-categories',
  templateUrl: './add-categories.component.html',
  styleUrls: ['./add-categories.component.css']
})
export class AddCategoriesComponent implements OnInit {

  constructor(private categoryService:CategoryService,private sanc:MatSnackBar) { }

  category={
    "title":"",
    "description":""
  }
  ngOnInit(): void {
  }

  public addCategory(addCategoryForm:NgForm)
  {
    if(this.category.title.trim()=='' || this.category.title.trim()==null)
    {
           this.sanc.open("Title Requires!",'',{
            duration:3000,
           })
           return;
    }
   // console.log(this.category)
    this.categoryService.addCategory(this.category).subscribe(
      {
        next:(data)=>{
          console.log(data);
          addCategoryForm.reset();
          Swal.fire('Thank you...', 'Category added succesfully!', 'success')
        },
        error:(e)=>{
          console.log(e);
          addCategoryForm.reset();
          Swal.fire('Sorry...', 'Server error!', 'error')
        }
      }
    )
  }

}
