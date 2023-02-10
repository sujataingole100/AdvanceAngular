import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {
  userForm: FormGroup;
  editPhoneNo: string = ''
  constructor(private activatedRoute: ActivatedRoute) {
    this.userForm = new FormGroup({
      FirstName: new FormControl('', Validators.required),
      LastName: new FormControl('', Validators.required),
      Email: new FormControl('', Validators.required),
      Phone: new FormControl('', Validators.required),
      Status: new FormControl('', Validators.required),
      DateOfBirth: new FormControl('', Validators.required),
      Password: new FormControl('', Validators.required),
      Address: new FormGroup({
        Country: new FormControl('', Validators.required),
        State: new FormControl('', Validators.required),
        City: new FormControl('', Validators.required)
      })
    })
    debugger
    this.activatedRoute.params.subscribe(res => {
      debugger
      if (res['phone'] != null) {
        this.editPhoneNo =res['phone'];
        const data=localStorage.getItem('userList');
        if(data!=null){
          const localData=JSON.parse(data);
          const currentData=localData.find((m:any)=>m.Phone==this.editPhoneNo);
          if(currentData!==undefined){
            this.userForm = new FormGroup({
              FirstName: new FormControl(currentData.FirstName, Validators.required),
              LastName: new FormControl(currentData.LastName, Validators.required),
              Email: new FormControl(currentData.Email, Validators.required),
              Phone: new FormControl(currentData.Phone, Validators.required),
              Status: new FormControl(currentData.Status, Validators.required),
              DateOfBirth: new FormControl(currentData.DateOfBirth, Validators.required),
              Password: new FormControl(currentData.Password, Validators.required),
              Address: new FormGroup({
                Country: new FormControl(currentData.Address.Country, Validators.required),
                State: new FormControl(currentData.Address.State, Validators.required),
                City: new FormControl(currentData.Address.City, Validators.required)
              })
            })
          }
        }
      }
    })
  }

  ngOnInit(): void {
    debugger

  }
  OnSave() {
    debugger
    this.userForm.markAllAsTouched();
    if (!this.userForm.invalid) {
      const data = localStorage.getItem('userList');
      if (data != null) {
        const localData = JSON.parse(data);
        localData.push(this.userForm.value);
        localStorage.setItem('userList', JSON.stringify(localData));
      } else {
        let arr = []
        arr.push(this.userForm.value);
        localStorage.setItem('userList', JSON.stringify(arr));
      }
      this.userForm.reset();
    }
  }
  OnClear() {
    this.userForm.reset();
  }
}
