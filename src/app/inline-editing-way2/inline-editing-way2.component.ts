import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-inline-editing-way2',
  templateUrl: './inline-editing-way2.component.html',
  styleUrls: ['./inline-editing-way2.component.css']
})
export class InlineEditingWay2Component implements OnInit {
  enquiryArray: any[];
  form: FormGroup
  constructor() {
    this.form = new FormGroup({
      fname: new FormControl(''),
      lname: new FormControl(''),
      contactNo:new FormControl(''),
      email: new FormControl('')
    })
    this.enquiryArray = [
      {
        "enqiryId": 64,
        "name": "sarika",
        "isRead": true,
        "contactNo": "12345689",
        "email": "sarika@1234",
        "query": "no",
        editFieldName:''
      },
      {
        "enqiryId": 65,
        "name": "mayuri",
        "isRead": false,
        "contactNo": "16879",
        "email": "r@gmail.com",
        "query": "joi",
        editFieldName:''
      },
      {
        "enqiryId": 66,
        "name": "df",
        "isRead": false,
        "contactNo": "545445",
        "email": "w@gmIL.com",
        "query": "dfgdfg",
        editFieldName:''
      },
      {
        "enqiryId": 67,
        "name": "mayuri",
        "isRead": false,
        "contactNo": "7028198223",
        "email": "mayurihajare8@gmail.com",
        "query": "dfgdfg",
        editFieldName:''
      },
      {
        "enqiryId": 68,
        "name": "qq",
        "isRead": false,
        "contactNo": "7028198223",
        "email": "m@gmail.com",
        "query": "joi",
        editFieldName:''
      }
    ]
  }

  ngOnInit(): void {
  }
  onEdit(item: any,field:string) {
    debugger
    item.editFieldName = field;
    const currentRecord = this.enquiryArray.find((m: any) => m.enqiryId == item.enqiryId);
    if (currentRecord !== undefined) {
      this.form = new FormGroup({
        enqiryId: new FormControl(currentRecord.enqiryId),
        fname: new FormControl(currentRecord.name),
        contactNo: new FormControl(currentRecord.contactNo),
        email: new FormControl(currentRecord.email)
      })
    }
  }
  OnUpdate() {
    debugger
    const currentRecord = this.enquiryArray.find((m: any) => m.enqiryId === this.form.controls['enqiryId'].value)
    if (currentRecord != undefined) {
      currentRecord.name = this.form.controls['fname'].value;
    }

  }

  close(item: any){
    item.editFieldName = '';
  }
}

