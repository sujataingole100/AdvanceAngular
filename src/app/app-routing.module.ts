import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsyncPipeComponent } from './async-pipe/async-pipe.component';
import { ReusableTableCompComponent } from './async-pipe/reusable-table-comp/reusable-table-comp.component';
import { BehaviouralSubjectComponent } from './behavioural-subject/behavioural-subject.component';
import { InlineEditingWay2Component } from './inline-editing-way2/inline-editing-way2.component';
import { InlineEditingComponent } from './inline-editing/inline-editing.component';
import { JsInterviewComponent } from './js-interview/js-interview.component';
import { MovieTicketBookingComponent } from './movie-ticket-booking/movie-ticket-booking.component';
import { NewUserComponent } from './priyaMachineTest/new-user/new-user.component';
import { UserListComponent } from './priyaMachineTest/user-list/user-list.component';
import { ReactiveCrudComponent } from './reactive-crud/reactive-crud.component';
import { ReactiveCrud1Component } from './reactive-crud1/reactive-crud1.component';
import { ReactiveCrud2Component } from './reactive-crud2/reactive-crud2.component';
import { TemplateCrudComponent } from './template-crud/template-crud.component';
import { TemplateCrud1Component } from './template-crud1/template-crud1.component';
import { TemplateCrud2Component } from './template-crud2/template-crud2.component';
import { ViewChildComponent } from './view-child/view-child.component';

const routes: Routes = [
  {
    path: 'asyncPipe',
    component: AsyncPipeComponent
  },
  {
    path: 'reactiveCrud',
    component: ReactiveCrudComponent
  },
  {
    path: 'inlineEditing',
    component: InlineEditingComponent
  },
  {
    path: 'ReTable',
    component: ReusableTableCompComponent
  },
  {
    path:'Editing-2',
    component:InlineEditingWay2Component
  },
  {
    path:'MovieTicket',
    component:MovieTicketBookingComponent
  },
  {
    path:'viewChild',
    component:ViewChildComponent
  },{
    path:'interviewQuestions',
    component:JsInterviewComponent
  },
  {
    path:'newUser',
    component:NewUserComponent
  },
  {
    path:'editUser/:phone',
    component:NewUserComponent
  },
  {
    path:"userList",
    component:UserListComponent
  },
  {
    path:'templateCrud',
    component:TemplateCrudComponent
  },{
    path:'Crud',
    component:ReactiveCrud1Component
  },
  {
    path:'TemplateCrud',
    component:TemplateCrud1Component
  },
  {
    path:'Crud2',
    component:TemplateCrud2Component
  },
  {
    path:'RCrud2',
    component:ReactiveCrud2Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
