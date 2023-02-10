import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AsyncService } from 'src/app/services/async.service';

@Component({
  selector: 'app-reusable-table-comp',
  templateUrl: './reusable-table-comp.component.html',
  styleUrls: ['./reusable-table-comp.component.css']
})
export class ReusableTableCompComponent implements OnInit {
  headArray = [
    {
      head: 'Language Id',
      fieldName: 'languageId'
    },
    {
      head: 'Language',
      fieldName: 'language'
    },
    {
      head: 'Action',
      fieldName: ''
    }
  ]
  data: any;
  // enrl$: Observable<any[]> = new Observable<any[]>();
  languageList: any = []
  filteredData: any
  constructor(private http: HttpClient, private asyncSer: AsyncService) { }

  ngOnInit(): void {
  }
  getAllLanguages() {
    debugger
    this.http.get("http://onlinetestapi.gerasim.in/api/OnlineTest/GetAllLanguages").subscribe((result: any) => {
      this.languageList = result['data'];
    })
  }
  delete(item: any) {
    debugger
  }
  edit(item: any) {
    debugger
  }
}
