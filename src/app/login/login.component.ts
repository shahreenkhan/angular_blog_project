import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminServiceService } from '../admin/admin-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
form:any
  constructor(private a:AdminServiceService, private route:Router) { }

  ngOnInit(): void {
    this.form =new FormGroup({
      email:new FormControl(''),
      password:new FormControl('')
    })
  }

  login(){
  // console.log(this.form.value)
  this.a.admin_login(this.form.value).subscribe(res=>{
    console.log(res);

    this.form.reset();
    this.route.navigate(["/admin-dashboard"]);
  },
  err=>{
    console.log(err)
  }
  )
}

}
