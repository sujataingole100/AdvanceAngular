import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-crud',
  templateUrl: './template-crud.component.html',
  styleUrls: ['./template-crud.component.css']
})
export class TemplateCrudComponent implements OnInit {
  empArray: any[]=[];
  employeeObj: any;
  search:string='';
  FilteredEmployeArray:any[]=[];
  isSidePannel: boolean = false;
  constructor() {
    this.employeeObj = {
      EmployeeId: 0,
      EmployeeName: '',
      ContactNo: '',
      EmailId: ''
    }
  }

  ngOnInit(): void {
    const data = localStorage.getItem('emp');
    if (data != null) {
      this.empArray = JSON.parse(data);
      this.FilteredEmployeArray = JSON.parse(data);
    }
  }
  add() {
    this.isSidePannel = true;
  }
  addEmp() {
    debugger
    if (this.employeeObj.EmployeeId == 0) {
      this.employeeObj.EmployeeId = this.empArray.length + 1;
      this.empArray.push(this.employeeObj);

    }
    localStorage.setItem('emp', JSON.stringify(this.empArray))
      this.employeeObj = {
        EmployeeId: 0,
        EmployeeName: '',
        ContactNo: '',
        EmailId: ''
      }
  }
  editEmp(item: any) {
    this.isSidePannel = true;
    this.employeeObj = item;
  }
  delete(item: any) {
    debugger
    const data = this.empArray.findIndex((m: any) => m.EmployeeId == item);
    this.empArray.splice(data, 1);
    localStorage.setItem('emp', JSON.stringify(this.empArray))
  }
  updateEmp() {
    debugger
    if (this.employeeObj.EmployeeId !== 0) {
      const currentRecord = this.empArray.find((m: any) => m.EmployeeId == this.employeeObj.EmployeeId);
      if (currentRecord !== undefined) {
        this.employeeObj=currentRecord;
        this.addEmp();
      }
    }
    localStorage.setItem('emp', JSON.stringify(this.empArray))
  }
  cancel() {
    this.isSidePannel = false;
  }
  OnFilter(event: any) {
    debugger
    this.FilteredEmployeArray = this.empArray.filter((element:any) => {
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
      this.FilteredEmployeArray.sort((a: any, b: any) => a[key].localeCompare(b[key]));
    } else {
      this.sortMode = true;
      this.FilteredEmployeArray.sort((a: any, b: any) => b[key].localeCompare(a[key]));
    }
    localStorage.setItem('emp', JSON.stringify(this.empArray))
  }

}
