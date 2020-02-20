import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  store(AuthConstants: typeof import("./config/auth-constant").AuthConstants, AUTH: any, arg2: any) {
    throw new Error("Method not implemented.");
  }

  constructor(private http: HttpClient, private _serviceService: ServiceService) { }
  login_url = 'http://168.172.185.101:7000/st';
  reg_url = 'http://168.172.185.106:7000/addlord';
  regstu_url = 'http://168.172.185.106:5000/reg';

  public getLogin()
  {
    return this.http.get<any>(this.login_url);
  }


  login(postData:any): Observable<any>{

    return this.http.post('login_url',postData)
  }
  
  
  
  
  public postLandlord(addlord:any)
  {
    return this.http.post<any>(this. reg_url, addlord, {});
  }

  public poststu(reg:any)
  {
    return this.http.post<any>(this. regstu_url, reg, {});
  }





}
