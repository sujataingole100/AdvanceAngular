import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { InlineEditingComponent } from '../inline-editing/inline-editing.component';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.css']
})
export class ViewChildComponent implements OnInit, AfterViewInit {
  newArray: any = []
  @ViewChild('userName')
  candidateName!: ElementRef;
  @ViewChild(InlineEditingComponent)
  InlineCompInstance!: (InlineEditingComponent);
  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    debugger
    const Name = this.candidateName.nativeElement.value;
    this.candidateName.nativeElement.style.color = 'red';
    const childValue = this.InlineCompInstance.enquiryArray;
    this.newArray=childValue
  }
}
