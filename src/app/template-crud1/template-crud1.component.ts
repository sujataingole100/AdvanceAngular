import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-crud1',
  templateUrl: './template-crud1.component.html',
  styleUrls: ['./template-crud1.component.css']
})
export class TemplateCrud1Component implements OnInit {
  usersArray: any = [
    {
      userId: 48,
      userName: 'CodeFirst',
      userRole: 'Admin',
      userPassword: '12345'
    },
    {
      userId: 48,
      userName: 'CodeFirst',
      userRole: 'Admin',
      userPassword: '12345'
    }
  ]
  usersObj: any;
  isSidePannel: boolean = false;
  constructor() {
    this.usersObj = {
      userId: 0,
      userName: '',
      userRole: '',
      userPassword: ''
    }
  }

  ngOnInit(): void {
    const localData = localStorage.getItem('user');
    if (localData != null) {
      this.usersArray = JSON.parse(localData);
    }
  }
  Add() {
    this.isSidePannel = true;
  }

  close() {
    this.isSidePannel = false;
  }
  AddUser() {
    debugger
    if (this.usersObj.userId == 0) {
      this.usersObj.userId = this.usersArray.length + 1;
      this.usersArray.push(this.usersObj);
      localStorage.setItem('user', JSON.stringify(this.usersArray));
    }
  }
  OnEdit(item: any) {
    this.isSidePannel = true;
    this.usersObj = item;
  }
  Update() {
    debugger
    const currentRecord = this.usersArray.find((m: any) => m.userId === this.usersObj.userId);
    if (currentRecord !== undefined) {
      this.usersObj = currentRecord;
      this.AddUser();
    }
    localStorage.setItem('user', JSON.stringify(this.usersArray));
  }
  OnDelete(item: any) {
    debugger
    const id = this.usersArray.findIndex((m: any) => m.userId === this.usersObj.userId);
    this.usersArray.splice(id,1);
    localStorage.setItem('user', JSON.stringify(this.usersArray));
  }

}
