import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../admin/admin-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
data:any
  constructor(private A:AdminServiceService) { }

  ngOnInit(): void {
    this.A.getdata().subscribe((res)=>{
      // console.log(res)
      this.data=res
    })
  }

}
