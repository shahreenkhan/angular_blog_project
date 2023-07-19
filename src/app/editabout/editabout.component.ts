import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminServiceService } from '../admin/admin-service.service';

@Component({
  selector: 'app-editabout',
  templateUrl: './editabout.component.html',
  styleUrls: ['./editabout.component.css']
})
export class EditaboutComponent implements OnInit {
form:any;
editdata:any;
id:any;
  constructor(private a:AdminServiceService, private r:ActivatedRoute, private route:Router) { }

  ngOnInit(): void {
    // this.form = new FormGroup({
    //   about : new FormControl('')
    // })
    //this.editdata = res
    // this.form.patchValue({
    //   about: this.editdata.about
    // })
  }
//   update(){
//     this.a.updateabout(this.form.value,this.id).subscribe(res=>{
//       console.log(res);
      
//     })

// }
}
