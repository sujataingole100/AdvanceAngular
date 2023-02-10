import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-reusable-table',
  templateUrl: './reusable-table.component.html',
  styleUrls: ['./reusable-table.component.css']
})
export class ReusableTableComponent implements OnInit {
  @Input() headArray: any[] = [];
  @Input() gridArray: any = []
  @Output() OnEdit = new EventEmitter<any>();
  @Output() OnDelete = new EventEmitter<any>();
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }
  edit(item: any) {
    debugger
    this.OnEdit.emit(item);
  }
  delete(item: any) {
    debugger
    this.OnDelete.emit(item);
  }
}
