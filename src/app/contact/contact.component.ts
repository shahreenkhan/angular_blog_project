import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../admin/admin-service.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
data:any
  constructor(private a:AdminServiceService) { }

  ngOnInit(): void {
    this.a.contactdata().subscribe((res)=>{
      console.log(res);
      this.data=res
    })
  }
 

}
