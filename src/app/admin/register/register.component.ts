import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminServiceService } from '../admin-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
form:any;
data:any;
  constructor(private as:AdminServiceService, private route:Router) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(''),
      email :new FormControl(''),
      password: new FormControl(''),

    })
    this.as.registerdata().subscribe((res)=>{
      console.log(res);
      this.data=res;
    })
  }
    sendregister(){
      // console.log(this.form.value);
      this.as.sendregisterdetails(this.form.value).subscribe((res)=>{
        console.log(res);
        this.route.navigate(['/register'])
      })
    }

    
  }


