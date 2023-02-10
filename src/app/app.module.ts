import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AsyncPipeComponent } from './async-pipe/async-pipe.component';
import { JsInterviewComponent } from './js-interview/js-interview.component';
import { ReusableTableComponent } from './reusable-table/reusable-table.component';
import { ReactiveCrudComponent } from './reactive-crud/reactive-crud.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InlineEditingComponent } from './inline-editing/inline-editing.component';
import { ReusableTableCompComponent } from './async-pipe/reusable-table-comp/reusable-table-comp.component';
import { InlineEditingWay2Component } from './inline-editing-way2/inline-editing-way2.component';
import { MovieTicketBookingComponent } from './movie-ticket-booking/movie-ticket-booking.component';
import { BehaviouralSubjectComponent } from './behavioural-subject/behavioural-subject.component';
import { ViewChildComponent } from './view-child/view-child.component';
import { NewUserComponent } from './priyaMachineTest/new-user/new-user.component';
import { UserListComponent } from './priyaMachineTest/user-list/user-list.component';
import { TemplateCrudComponent } from './template-crud/template-crud.component';
import { ReactiveCrud1Component } from './reactive-crud1/reactive-crud1.component';
import { TemplateCrud1Component } from './template-crud1/template-crud1.component';
import { TemplateCrud2Component } from './template-crud2/template-crud2.component';
import { ReactiveCrud2Component } from './reactive-crud2/reactive-crud2.component';

@NgModule({
  declarations: [
    AppComponent,
    AsyncPipeComponent,
    JsInterviewComponent,
    ReusableTableComponent,
    ReactiveCrudComponent,
    InlineEditingComponent,
    ReusableTableCompComponent,
    InlineEditingWay2Component,
    MovieTicketBookingComponent,
    BehaviouralSubjectComponent,
    ViewChildComponent,
    NewUserComponent,
    UserListComponent,
    TemplateCrudComponent,
    ReactiveCrud1Component,
    TemplateCrud1Component,
    TemplateCrud2Component,
    ReactiveCrud2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
