import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {
// url="http://localhost:3000/"
url="http://localhost:3000/api/"

  constructor(private http:HttpClient, private route:Router) { }

  getdata(){
    return this.http.get(this.url+'blogs')
  }
  categorygetdata(){
    return this.http.get(this.url+'category')
  }
  updateblogs(data:any,id:any){
    return this.http.put(this.url+'posts/'+id,data)
  }
  blogdetail(id:any){
    return this.http.get(this.url+"blogs/"+id)
  }
  sendregisterdetails(details: any) {
    console.log(details);
    return this.http.post(this.url + 'register', details)
  }
 registerdata() {
    return this.http.get(this.url + 'register')
  }
  sendcontactdeatil(identity:any){
    console.log(identity);
    return this.http.post(this.url + 'contact/',identity)
  }
  contactdata(){
    return this.http.get(this.url+'contact/')
  }
  viewcontact(id:any){
    return this.http.get(this.url+"contact/"+id)
  }
  aboutdata() {
    return this.http.get(this.url + 'about')
  }
updateabout(id:any,data:any){
  return this.http.get(this.url+'about/'+id,data)
}
admin_login(data:any){
    console.log(data);
    return this.http.post<any>(this.url+'register',data)
  }  


}
