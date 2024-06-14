import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpServicesService } from 'src/app/Services/http-services.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  

  constructor(private http:HttpServicesService, private router:Router) { }

  loginObj:any={
    email : '',
    password : ''
  }

  loginProcess(){
    //debugger;

      this.http.loginUser(this.loginObj).subscribe(resp=>{
        debugger
        if(resp.result){
          //console.log(res);
          //alert("Login Success");
          localStorage.setItem("token", resp.data.token);
          localStorage.setItem('id', resp.data.id);
          localStorage.setItem('fullName',resp.data.fullName);
          localStorage.setItem('email', resp.data.email);
          //this.router.navigate(['dashBoard']);
          //this.router.navigate(['dashboard'], {queryParams:res.user});


        }
      }, (err:HttpErrorResponse)=>{
        //console.log(err)
        if(err.error.result==false){
          alert("login unsuccess")
        }
      })

  }


  userObj:any={
    fullName:'',
    email:'',
    password:'',
    phone:''
  }

  submitForm(){
    //console.log(this.userObj);
    this.http.createUser(this.userObj).subscribe(resp=>{
      //console.log(resp);
      alert('Created Successfylly, Please Login..')
      //this.router.navigate(['dashBoard']);
    }, (err:HttpErrorResponse)=>{
      //console.log(err)
      if(err.error.result==false){
        alert("created unsuccess")
      }
    })
  }

  logout(){
    debugger
    sessionStorage.removeItem('token')
    sessionStorage.removeItem('id')
    sessionStorage.removeItem('fullName')
    sessionStorage.removeItem('email')
    this.router.navigate(['/']);
  }


  ApplicationData:any=[];

  appObj:any={
    Name:'',
    Mobilenumber:0,
    Email:'',
    Gender:'',
    ApplicationAmount:0,
    profilepicture:''
    
  }

  ngOnInit(): void {
    let newObj={
      Name:'Scott',
      Mobilenumber:8976787323,
      Email:'scott123@gmail.com',
      Gender:'Male',
      ApplicationAmount:2000,
      profilepicture:'https://th.bing.com/th/id/OIP.FI-QHM4fQ-3ZgTgKY-wZiAHaHb?w=205&h=206&c=7&r=0&o=5&dpr=1.3&pid=1.7'
      
    }

    this.ApplicationData.push(newObj);

    newObj={
      Name:'John Son',
      Mobilenumber:7879787323,
      Email:'john123@gmail.com',
      Gender:'Male',
      ApplicationAmount:2000,
      profilepicture:'https://th.bing.com/th/id/OIP.ifk-MamXJA3mg2QR8zVhIQAAAA?pid=ImgDet&w=184&h=189&c=7&dpr=1.3'
      
    }

    this.ApplicationData.push(newObj);
  }

  deleteItem(index:any){
    debugger
    this.ApplicationData.splice(index, 1);
  }

  addMemb(){

    debugger
    let blur=document.getElementById('blur');
    blur?.classList.toggle('active');

    let staticBackdrop=document.getElementById('staticBackdrop');
    staticBackdrop?.classList.toggle('active');
  }


  newlyAddMemb(){
    debugger
    const elementsToRemove = document.querySelectorAll('.required');
      elementsToRemove.forEach((element) => element.remove());

    const formInputs = document.querySelectorAll('.modal-body form .form-control'); // Replace with your actual form class or ID
    // Convert HTMLFormControlsCollection to an array

    // Loop through relevant input elements
    let is_null=0;
    formInputs.forEach((input:any) => {
        if (input.value === '') {
          is_null=1;
          input.insertAdjacentHTML('afterend', `<span class="required text-danger">above field is required</span>`);
        }
    });

    if(is_null){
      
    }else{
      debugger
      formInputs.forEach((input:any) => {
        this.appObj[input.name]=input.value;
      });
      this.ApplicationData.push(this.appObj);

      let blur=document.getElementById('blur');
      blur?.classList.toggle('active');
  
      let staticBackdrop=document.getElementById('staticBackdrop');
      staticBackdrop?.classList.toggle('active');
    }
  }

}
