import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BehaviouralSubjectService } from '../services/behavioural-subject.service';

@Component({
  selector: 'app-inline-editing',
  templateUrl: './inline-editing.component.html',
  styleUrls: ['./inline-editing.component.css']
})
export class InlineEditingComponent implements OnInit {
  enrollmentArray:any=[];
  enquiryArray: any[];
  form: FormGroup
  constructor(private behaSer:BehaviouralSubjectService) {
    this.form = new FormGroup({
      fname: new FormControl(''),
      lname: new FormControl(''),
      cno:new FormControl(''),
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
        'isEdit': false
      },
      {
        "enqiryId": 65,
        "name": "mayuri",
        "isRead": false,
        "contactNo": "16879",
        "email": "r@gmail.com",
        "query": "joi",
        'isEdit': false
      },
      {
        "enqiryId": 66,
        "name": "df",
        "isRead": false,
        "contactNo": "545445",
        "email": "w@gmIL.com",
        "query": "dfgdfg",
        'isEdit': false
      },
      {
        "enqiryId": 67,
        "name": "mayuri",
        "isRead": false,
        "contactNo": "7028198223",
        "email": "mayurihajare8@gmail.com",
        "query": "dfgdfg",
        'isEdit': false
      },
      {
        "enqiryId": 68,
        "name": "qq",
        "isRead": false,
        "contactNo": "7028198223",
        "email": "m@gmail.com",
        "query": "joi",
        'isEdit': false
      }
    ]
  }

  ngOnInit(): void {
    debugger
    this.behaSer.enrollDetails.subscribe(res=>{
      this.enrollmentArray=res;

    })
  }
  onEdit(item: any) {
    this.enquiryArray.forEach(element => {
      element.isEdit = false;
    });
    item.isEdit = true;
  }
  OnUpdate() {
    const currentRecord = this.enquiryArray.find((m: any) => m.enqiryId === this.form.controls['enqiryId'].value)
    if (currentRecord != undefined) {
      currentRecord.name = this.form.controls['name'].value;
    }
    this.enquiryArray.push(this.form);
  }
}
