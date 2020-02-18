// tslint:disable-next-line: comment-format
//step 2

import { Component, OnInit } from '@angular/core';

import { NgModule, Pipe} from '@angular/core';
import {
  ReactiveFormsModule,
  FormsModule,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
@Component({
  selector: 'app-landlord-reg',
  templateUrl: './landlord-reg.page.html',
  styleUrls: ['./landlord-reg.page.scss'],
})
export class LandlordRegPage implements OnInit {
  constructor() {}

    addLords: any = [];
 /*addData() {
   // tslint:disable-next-line: whitespace
   this.landLordService.addLandlord()
   // tslint:disable-next-line: no-trailing-whitespace
   .subscribe(data=> console.log(data));
   console.log(this.add());
 }*/



 langs: string[] = ['English', 'French', 'German'];
  myform: FormGroup;
  firstName: FormControl;
  lastName: FormControl;
  email: FormControl;
  password: FormControl;
  language: FormControl;

  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }

  createFormControls() {
    this.firstName = new FormControl('', Validators.required);
    this.lastName = new FormControl('', Validators.required);
    this.email = new FormControl('', [
      Validators.required,
      Validators.pattern('[^ @]*@[^ @]*')
    ]);
    this.password = new FormControl('', [
      Validators.required,
      Validators.minLength(8)
    ]);
    this.language = new FormControl('');
  }

  createForm() {
    this.myform = new FormGroup({
      name: new FormGroup({
        firstName: this.firstName,
        lastName: this.lastName
      }),
      email: this.email,
      password: this.password,
      language: this.language
    });
  }

}

    // tslint:disable-next-line: no-trailing-whites
