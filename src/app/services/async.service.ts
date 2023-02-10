import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class AsyncService {

  constructor(private http: HttpClient) {

   }
  getAllLanguages(): Observable<any[]> {
    return this.http.get<any[]>("http://onlinetestapi.gerasim.in/api/OnlineTest/GetAllLanguages");
  }

  // getAllEnrollment():Observable<any[]>{
  //   return this.http.get<any[]>("http://onlinetestapi.gerasim.in/api/OnlineTest/GetAllEntrollments")
  // }
  getallEnrollByID(id: any): Observable<any> {
    return this.http.get<any>("http://onlinetestapi.gerasim.in/api/OnlineTest/GetAllEntrollmentByCandidate?id=" + id);
  }
  getAllEnrollment():Observable<any[]>  {
    return this.http.get<any[]>("https://onlinetestapi.gerasim.in/api/OnlineTest/GetAllEntrollments");
  }
}
