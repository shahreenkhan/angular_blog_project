import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
id:any
data:any
viewcontactdata:any
  constructor(private a:ActivatedRoute, private r:ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.r.snapshot.paramMap.get('id')
    console.log(this.id)

    // this.a.viewcontact(this.id).subscribe((res)=>{
    //   //console.log(res)
    //   this.viewcontactdata=res
    //   //console.log(this.studentviewdata)
    // })
  }

}
