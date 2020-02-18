import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }
  login_url = 'http://168.172.185.101:4000/st';

  public getLogin()
  {
    return this.http.get<any>(this.login_url);
  }
  
}
