import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpServicesService {

  constructor(private http:HttpClient) { }
  userURL="https://localhost:7034/api/User/";

  loginUser(data1:any):Observable<any>{
    return this.http.post( this.userURL+'Login', data1);
  }

  createUser(data:any):Observable<any>{
    return this.http.post(this.userURL+'CreateUser', data)
  }
}
