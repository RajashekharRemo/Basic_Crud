import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpServicesService } from 'src/app/Services/http-services.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  
  ngOnInit(): void {
  }
  constructor(private user:HttpServicesService, private router:Router) { }

  loginObj:any={
    email : '',
    password : ''
  }

  loginProcess(){
    //debugger;

      this.user.loginUser(this.loginObj).subscribe(resp=>{
        //debugger
        if(resp.result){
          //console.log(res);
          //alert("Login Success");
          sessionStorage.setItem("token", resp.data.token);
          sessionStorage.setItem('id', resp.data.id);
          sessionStorage.setItem('fullName',resp.data.fullName);
          sessionStorage.setItem('email', resp.data.email);
          this.router.navigate(['dashBoard']);
          //this.router.navigate(['dashboard'], {queryParams:res.user});


        }
      }, (err:HttpErrorResponse)=>{
        //console.log(err)
        if(err.error.result==false){
          alert("login unsuccess")
        }
      })

      
    
  }

}
