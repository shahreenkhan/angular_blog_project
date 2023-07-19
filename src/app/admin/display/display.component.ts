import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../admin-service.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
data:any
  constructor(private A:AdminServiceService) { }

  ngOnInit(): void {
    this.A.getdata().subscribe((res)=>{
      console.log(res)
      this.data=res
    })
  }

}
