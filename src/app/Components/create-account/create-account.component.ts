import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpServicesService } from 'src/app/Services/http-services.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent implements OnInit {

  constructor(private httpservices:HttpServicesService, private router:Router) { }

  ngOnInit(): void {
  }

  userObj:any={
    fullName:'',
    email:'',
    password:'',
    phone:''
  }

  submitForm(){
    //console.log(this.userObj);
    this.httpservices.createUser(this.userObj).subscribe(resp=>{
      //console.log(resp);
      alert('Created Successfylly, Please Login..')
      this.router.navigate(['/']);
    }, (err:HttpErrorResponse)=>{
      //console.log(err)
      if(err.error.result==false){
        alert("created unsuccess")
      }
    })
  }

}
