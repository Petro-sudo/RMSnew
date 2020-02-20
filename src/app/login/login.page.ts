import { Component, OnInit, Input } from '@angular/core';
import {ServiceService} from './../service.service';
import {ReactiveFormsModule, FormGroup, FormControl, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthConstants } from '../config/auth-constant';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  //@Input() loginData= {email:" ", password:" "}
  //navCtrl: any;
  //_ServiceService: any;
public postData = {email:" ", password:" "

};
  constructor(private router: Router,
     private _serviceService : ServiceService) { }
login: any=[];

  ngOnInit() {
    //this.getData();
  }
  validateInputs(){
    let email = this.postData.email.trim();
    let password = this.postData.password.trim();
    return (this.postData.email && 
      this.postData.password && 
      email.length>0 
      && password.length>0)
  
  }

  loginAction(){
    if(this.validateInputs()){
this._serviceService.login(this.postData).subscribe((res:any)=>{
  if(res.postData.email && res.postData.password){
this._serviceService.store(AuthConstants,AUTH, res.postData.email && res.postData.email);
this.router.navigate(['home']);
  }else
  {
    console.log("invalid info")
  }
})
    }else{
      console.log("please give info");
    }
  }










 public getData()
{
    this._serviceService.getLogin().subscribe((data: any)=>
{this.login=data;
console.log(this.login);
});

}

  

}
