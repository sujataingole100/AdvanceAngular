import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-crud2',
  templateUrl: './template-crud2.component.html',
  styleUrls: ['./template-crud2.component.css']
})
export class TemplateCrud2Component implements OnInit {
  clientArray: any[] = []
  clientObj: any;
  isSidePannel: boolean = false;
  constructor() {
    this.clientObj = {
      clientId: 0,
      clientName: '',
      businessName: '',
      contactPerson: '',
      contactNo: '',
      altContactNo: '',
      email: ''
    }
  }

  ngOnInit(): void {
    debugger
    const localData = localStorage.getItem('clientArray');
    if (localData != null) {
      this.clientArray = JSON.parse(localData);
    }
  }
  OnAdd() {
    debugger
    if (this.clientObj.clientId === 0) {
      this.clientObj.clientId = this.clientArray.length + 1;
      this.clientArray.push(this.clientObj);
    }
    localStorage.setItem('clientArray', JSON.stringify(this.clientArray));
    this.clientObj = {
      clientId: 0,
      clientName: '',
      businessName: '',
      contactPerson: '',
      contactNo: '',
      altContactNo: '',
      email: ''
    }
  }
  Close() {
    this.isSidePannel = false;
  }
  Edit(item: any) {
    this.isSidePannel = true;
    this.clientObj = item;
  }
  OnUpdate() {
    debugger;
    if (this.clientObj.clientId !== 0) {
      const currentRecord = this.clientArray.find((m: any) => m.clientId == this.clientObj.clientId);
      if(currentRecord!=undefined){
        this.clientObj = currentRecord;
      }
    }
    localStorage.setItem('clientArray', JSON.stringify(this.clientArray));
  }
  delete(item: any) {
    debugger

    for (let index = 0; index < this.clientArray.length; index++) {
      if (item == this.clientArray[index].clientId) {
        this.clientArray.splice(index, 1);
      }
    }
    localStorage.setItem('clientArray', JSON.stringify(this.clientArray));
  }
  Add() {
    this.isSidePannel = true;
  }
}
