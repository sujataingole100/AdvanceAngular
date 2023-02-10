import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BehaviouralSubjectService {
  enrollDetails: BehaviorSubject<any>;
  constructor(private http: HttpClient) {
    debugger
    this.enrollDetails = new BehaviorSubject<any>(null);
  }
  getAllEnrollments(): Observable<any[]> {
    debugger
    return this.http.get<any[]>("http://onlinetestapi.gerasim.in/api/OnlineTest/GetAllEntrollments");
  }
}
