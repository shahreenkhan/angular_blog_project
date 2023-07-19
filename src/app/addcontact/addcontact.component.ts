import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminServiceService } from '../admin/admin-service.service';

@Component({
  selector: 'app-addcontact',
  templateUrl: './addcontact.component.html',
  styleUrls: ['./addcontact.component.css']
})
export class AddcontactComponent implements OnInit {
form:any
data:any
  constructor(private a :AdminServiceService, private route:Router) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      name : new FormControl(''),
      email: new FormControl(''),
      phone: new FormControl(''),
      message:new FormControl('')
    })
    this.a.contactdata().subscribe((res)=>{
      console.log(res);
      this.data=res;
    })
  }
  sendcontact(){
    console.log(this.form.value);
    this.a.sendcontactdeatil(this.form.value).subscribe((res)=>{
      console.log(res);
      this.route.navigate(['/contact'])
    })
  }

}
