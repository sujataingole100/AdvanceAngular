import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-js-interview',
  templateUrl: './js-interview.component.html',
  styleUrls: ['./js-interview.component.css']
})
export class JsInterviewComponent implements OnInit {
  data: any;
  result: any = [];
  next: number = 0
  duplicateArray = [1, 2, 1, 1, 3, 4, 4, 5, 6, 2, 5, 6, 'sujata', 'sujata', 'shyam']
  users = [{
    name: 'John',
    email: 'johnson@mail.com',
    age: 25,
    address: 'USA'
  },
  {
    name: 'Tom',
    email: 'tom@mail.com',
    age: 35,
    address: 'England'
  },
  {
    name: 'Sujata',
    email: 'mark@mail.com',
    age: 28,
    address: 'England'
  },
    ,
  {
    name: 'Mark',
    email: 'sujata@mail.com',
    age: 29,
    address: 'pakistan'
  }
  ];
  filteredData: any
  constructor() { }

  ngOnInit(): void {

    // filter by name

    //  this.users = this.users.filter((x:any) => x.name == 'Mark');
    //  console.log(this.users);

    //descending order

    //  this.filteredData = this.users.sort((a:any, b: any) => b.name.localeCompare(a.name))
    //  console.log(this.filteredData);

    //  ascending order

    // this.filteredData = this.users.sort((a:any, b: any) => a.name.localeCompare(b.name))
    // console.log(this.filteredData);

    this.filteredData = this.users.sort((a: any, b: any) => b.age - a.age)
    console.log(this.filteredData);
    // output = 0, 1, 1, 2, 3, 5
    debugger



 }
}
