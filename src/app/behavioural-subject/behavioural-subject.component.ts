import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BehaviouralSubjectService } from '../services/behavioural-subject.service';

@Component({
  selector: 'app-behavioural-subject',
  templateUrl: './behavioural-subject.component.html',
  styleUrls: ['./behavioural-subject.component.css']
})
export class BehaviouralSubjectComponent implements OnInit {
  enrollmentArray: any = [];
  constructor(private behaSer: BehaviouralSubjectService,private http:HttpClient) { }

  ngOnInit(): void {
    this.getAllEnrollments();
    // this.behaSer.enrollDetails.next(this.enrollmentArray);
  }
  getAllEnrollments(){
    debugger
    this.http.get('http://onlinetestapi.gerasim.in/api/OnlineTest/GetAllEntrollments').subscribe((res: any) => {
      this.enrollmentArray = res['data'];
      this.behaSer.enrollDetails.next(this.enrollmentArray);
    })
  }

}
