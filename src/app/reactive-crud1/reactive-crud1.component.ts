import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-crud1',
  templateUrl: './reactive-crud1.component.html',
  styleUrls: ['./reactive-crud1.component.css']
})
export class ReactiveCrud1Component implements OnInit {
  courseArray: any = [
    {
      courseName: "Angular",
      name: "Akansha Raundal patil",
      contactNo: "565667687",
      email: "aksansha@gmail.com",
    },
    {
      courseName: "Angular JS",
      name: "Sujata Gaikwad",
      contactNo: "9325762994",
      email: "Sujata@gmail.com",
    },
  ]
  isSidePaneel: boolean = false;
  courseForm: FormGroup
  constructor() {
    this.courseForm = new FormGroup({
      courseName: new FormControl(''),
      name: new FormControl(''),
      contactNo: new FormControl(''),
      email: new FormControl(''),
    })
  }

  ngOnInit(): void {
    const data = localStorage.getItem('course');
    if (data != null) {
      this.courseArray = JSON.parse(data);
    }
  }
  Add() {
    this.isSidePaneel = true;
  }
  AddCourse() {
    debugger
    const data = localStorage.getItem('course');
    if (data != null) {
      const localData = JSON.parse(data);
      localData.push(this.courseForm.value);
      localStorage.setItem('course', JSON.stringify(localData));
    }
    else {
      this.courseArray.push(this.courseForm.value);
      localStorage.setItem('course', JSON.stringify(this.courseArray));
    }
    this.courseForm = new FormGroup({
      courseName: new FormControl(''),
      name: new FormControl(''),
      contactNo: new FormControl(''),
      email: new FormControl(''),
    })
  }
  close() {
    this.isSidePaneel = false;
  }
  Edit(item: any) {
    debugger
    this.isSidePaneel = true;
    this.courseForm = new FormGroup({
      courseName: new FormControl(item.courseName),
      name: new FormControl(item.name),
      contactNo: new FormControl(item.contactNo),
      email: new FormControl(item.email),
    })
  }
  Delete(item: any) {
    debugger
    const data=this.courseArray.findIndex((m:any)=>m.contactNo==item.contactNo);
    this.courseArray.splice(data,1);
    localStorage.setItem('course', JSON.stringify(this.courseArray));
  }
  UpdateCourse(){
    debugger
    if(this.courseForm.controls['contactNo'].value!==undefined){
      const data=this.courseArray.find((m:any)=>m.contactNo==this.courseForm.controls['contactNo'].value);
      if(data!==undefined){
        data.courseName= this.courseForm.controls['courseName'].value,
        data.name= this.courseForm.controls['name'].value,
        data.contactNo= this.courseForm.controls['contactNo'].value,
        data.email= this.courseForm.controls['email'].value
      }
    }
    this.AddCourse();
    localStorage.setItem('course', JSON.stringify(this.courseArray));
  }
}
