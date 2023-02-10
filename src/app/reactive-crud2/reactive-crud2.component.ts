import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-crud2',
  templateUrl: './reactive-crud2.component.html',
  styleUrls: ['./reactive-crud2.component.css']
})
export class ReactiveCrud2Component implements OnInit {
  form: FormGroup;
  clientArray: any[] = []
  isSidePannel: boolean = false;
  emailRegEx = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';
  constructor() {
    this.form = new FormGroup({
      clientId: new FormControl(0),
      clientName: new FormControl('', Validators.required),
      businessName: new FormControl('', Validators.required),
      contactPerson: new FormControl('', Validators.required),
      contactNo: new FormControl('', Validators.required),
      altContactNo: new FormControl('', Validators.required),
      email: new FormControl("", Validators.required)
    })
  }

  ngOnInit(): void {
    const localData = localStorage.getItem('clientOBJ');
    if (localData != null) {
      this.clientArray = JSON.parse(localData);
    }
  }
  Add() {
    this.isSidePannel = true;
  }
  OnAdd() {
    debugger
    if (this.form.controls['clientId'].value == 0) {
      const clientObj = this.form.value;
      clientObj.clientId = this.clientArray.length + 1;
      this.clientArray.push(clientObj);
      localStorage.setItem('clientOBJ', JSON.stringify(this.clientArray));
    }
  }

  Close() {
    this.isSidePannel = false;
  }
  Edit(item: any) {
    this.isSidePannel = true;
    this.form = new FormGroup({
      clientId: new FormControl(item.clientId),
      clientName: new FormControl(item.clientName),
      businessName: new FormControl(item.businessName),
      contactPerson: new FormControl(item.contactPerson),
      contactNo: new FormControl(item.contactNo),
      altContactNo: new FormControl(item.altContactNo),
      email: new FormControl(item.email)
    })
  }
  OnUpdate() {
    debugger;
    if (this.form.controls['clientId'].value !== 0) {
      const currentRecord = this.clientArray.find((m: any) => m.clientId == this.form.controls['clientId'].value);
      if (currentRecord !== undefined) {
        currentRecord.clientName = this.form.controls['clientName'].value;
        currentRecord.businessName = this.form.controls['businessName'].value;
        currentRecord.businessName = this.form.controls['businessName'].value;
        currentRecord.contactNo = this.form.controls['contactNo'].value;
        currentRecord.altContactNo = this.form.controls['altContactNo'].value;
        currentRecord.email = this.form.controls['email'].value;
      }
      //  this.OnAdd();
      localStorage.setItem('clientOBJ', JSON.stringify(this.clientArray));
    }
  }
  delete(item: any) {
    debugger
    for (let index = 0; index < this.clientArray.length; index++) {
      if(item===this.clientArray[index].clientId){
        this.clientArray.splice(index,1);
      }
      localStorage.setItem('clientOBJ', JSON.stringify(this.clientArray));
    }
  }
}
