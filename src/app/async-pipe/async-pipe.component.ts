import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AsyncService } from '../services/async.service';

@Component({
  selector: 'app-async-pipe',
  templateUrl: './async-pipe.component.html',
  styleUrls: ['./async-pipe.component.css']
})
export class AsyncPipeComponent implements OnInit {
  // languageList: any = []
  enrollmentArrayByID: any = [];
  enrollmentList: any = [];
  newId: any
  constructor(private http: HttpClient, private asyncSer: AsyncService) {
    debugger
    this.enrollmentList = [];
  }

  ngOnInit(): void {
    // this.getAllLanguages();
    this.getAllEnrollment();
    const data = localStorage.getItem('id');
    if (data != null) {
      this.newId = data;
    }
  }
  // getAllLanguages() {
  //   debugger
  //   this.http.get("http://onlinetestapi.gerasim.in/api/OnlineTest/GetAllLanguages").subscribe((result: any) => {
  //     this.languageList = result['data'];
  //   })
  // }
  getallEnrollByID() {
    debugger

  }
  getAllEnrollment() {
    this.asyncSer.getAllEnrollment().subscribe((result: any) => {
      this.enrollmentList = result['data'];
    });
  }
  openLedger(item: any) {
    this.asyncSer.getallEnrollByID(item).subscribe((result: any) => {
      this.enrollmentArrayByID = result['data'];
      localStorage.setItem('id', this.enrollmentArrayByID.candidateId);
      return this.newId;
    })

  }
}

