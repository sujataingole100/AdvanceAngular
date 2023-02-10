import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-crud2',
  templateUrl: './template-crud2.component.html',
  styleUrls: ['./template-crud2.component.css']
})
export class TemplateCrud2Component implements OnInit {
  clientArray: any[] = []
  clientObj: any;
  search:string='';
  FilteredclientArray:any=[]
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
      this.FilteredclientArray = JSON.parse(localData);
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
  OnFilter(event: any) {
    debugger
    this.FilteredclientArray = this.clientArray.filter((element:any) => {
      let search =event;
      let values = Object.values(element);
      let flag = false
      values.forEach((val: any) => {
        if (val.toString().toLowerCase().indexOf(search) > -1) {
          flag = true;
          return;
        }
      })
      if (flag) {
        return element
      }
    });
  }
  sortMode:  boolean= true;
  sort(key : string) {
    debugger;
    if(this.sortMode) {
      this.sortMode = false;
      this.FilteredclientArray.sort((a: any, b: any) => a[key].localeCompare(b[key]));
    } else {
      this.sortMode = true;
      this.FilteredclientArray.sort((a: any, b: any) => b[key].localeCompare(a[key]));
    }
    localStorage.setItem('emp', JSON.stringify(this.clientArray))
  }
}
