import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../admin-service.service';

@Component({
  selector: 'app-displaycategory',
  templateUrl: './displaycategory.component.html',
  styleUrls: ['./displaycategory.component.css']
})
export class DisplaycategoryComponent implements OnInit {
data:any
  constructor(private A:AdminServiceService) { }

  ngOnInit(): void {
    this.A.categorygetdata().subscribe((res)=>{
      console.log(res)
      this.data=res
    })
  }

}
