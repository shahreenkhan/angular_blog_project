import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminServiceService } from '../admin-service.service';

@Component({
  selector: 'app-editblog',
  templateUrl: './editblog.component.html',
  styleUrls: ['./editblog.component.css']
})
export class EditblogComponent implements OnInit {
data:any
editdata:any
form:any
res:any
  constructor(private A:AdminServiceService, private a:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    // this.form = new FormGroup({
    //   title: new FormControl(''),
    //   description: new FormControl()
    // })
    // this.editdata = res
    // this.form.patchvalue({
    //   title:this.editdata.title,
    //   description:this.editdata.description
    // })

  }
  // update(){
  //   this.A.updateblogs(this.form.value,this.id).subscribe(res=>{
  //     console.log(res);
      
  //   })
  // }

}
