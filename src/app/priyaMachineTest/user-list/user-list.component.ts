import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  gridArray: any[] = []
  constructor(private router: Router) {
    const localData = localStorage.getItem('userList');
    if (localData != null) {
      this.gridArray = JSON.parse(localData);
    }
  }

  ngOnInit(): void {
  }
  OnEdit(item: any) {
    this.router.navigate(['editUser',item])
  }
  OnDelete(item: any) {
    debugger
    const deleteData=confirm("Are You Sure You Want To Delete");
    if(deleteData){
      const index=this.gridArray.findIndex((m:any)=>m.Phone==item);
      this.gridArray.splice(index,1);
     localStorage.setItem('userList',JSON.stringify(this.gridArray));
    }
  }
}
