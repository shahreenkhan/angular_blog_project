import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminServiceService } from '../admin/admin-service.service';

@Component({
  selector: 'app-blogdetail',
  templateUrl: './blogdetail.component.html',
  styleUrls: ['./blogdetail.component.css']
})
export class BlogdetailComponent implements OnInit {
id:any
blogdetaildata:any
  constructor(private A:AdminServiceService, private route:Router,private a :ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.a.snapshot.paramMap.get('id')
    // console.log(this.id)

    this.A.blogdetail(this.id).subscribe((res)=>{
      // console.log(res)
      this.blogdetaildata=res
      console.log(this.blogdetaildata)

    })
  }

}
