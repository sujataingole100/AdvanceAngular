import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-reactive-crud',
  templateUrl: './reactive-crud.component.html',
  styleUrls: ['./reactive-crud.component.css']
})
export class ReactiveCrudComponent implements OnInit {
  form: FormGroup
  studentArray: any = []
  constructor() {
    this.form = new FormGroup({
      studID: new FormControl(0),
      fname: new FormControl(''),
      lname: new FormControl(''),
      mono: new FormControl(''),
      email: new FormControl('')
    })
  }

  ngOnInit(): void {
    this.loadData();
  }
  loadData() {
    const data = localStorage.getItem('studentDetails');
    if (data != null) {
      this.studentArray = JSON.parse(data);
    }
  }
  OnSave() {
    debugger
    if (this.form.controls['studID'].value == 0) {
      const studObj = this.form.value;
      studObj.studID = this.studentArray.length + 1;
      this.studentArray.push(studObj);
      this.form = new FormGroup({
        studID: new FormControl(0),
        fname: new FormControl(''),
        lname: new FormControl(''),
        mono: new FormControl(''),
        email: new FormControl('')
      })
    }
    else {
      const currentRecord = this.studentArray.find((m: any) => m.studID == this.form.controls['studID'].value);
      if (currentRecord !== undefined) {
          currentRecord.fname = this.form.controls['fname'].value,
          currentRecord.lname = this.form.controls['lname'].value,
          currentRecord.mono = this.form.controls['mono'].value,
          currentRecord.email = this.form.controls['email'].value
      }
    }
    localStorage.setItem('studentDetails', JSON.stringify(this.studentArray));
  }
  OnCancel() {
    this.form = new FormGroup({
      studID: new FormControl(0),
      fname: new FormControl(''),
      lname: new FormControl(''),
      mono: new FormControl(''),
      email: new FormControl('')
    })
  }
  OnEdit(Id: number) {
    const currentRecord = this.studentArray.find((m: any) => m.studID == Id);
    if (currentRecord !== undefined) {
      this.form = new FormGroup({
        studID: new FormControl(currentRecord.studID),
        fname: new FormControl(currentRecord.fname),
        lname: new FormControl(currentRecord.lname),
        mono: new FormControl(currentRecord.mono),
        email: new FormControl(currentRecord.email)
      })
    }
  }
  OnDelete(Id: number) {
    debugger
    const currentRecord = this.studentArray.findIndex((m: any) => m.studID === Id);
    this.studentArray.splice(currentRecord, 1);

    // for (let index = 0; index < this.studentArray.length; index++) {
    //   if(this.studentArray[index].studID==Id){
    //     this.studentArray.splice(index,1);
    //   }
    // }
    localStorage.setItem('studentDetails', JSON.stringify(this.studentArray));
  }
}
