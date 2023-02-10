import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-ticket-booking',
  templateUrl: './movie-ticket-booking.component.html',
  styleUrls: ['./movie-ticket-booking.component.css']
})
export class MovieTicketBookingComponent implements OnInit {
  ticketArray: any = [];
  movieArray: any = [];
  timeSlot: any = [];
  movieObj: any;
  filteredData: any
  newArray: any = [];
  constructor() {
    this.movieObj = {
      movie: '',
      timeSlot: '',
      noOfTickets: 0,
      totalAmount: 0
    }
    this.movieArray = [
      {
        name: 'Bramastra',
        price: 200,
        time: ['10AM-1PM', '9PM-12PM', '6PM-9PM']
      },
      {
        name: 'Drusham',
        price: 300,
        time: ['10AM-1PM']
      },
      {
        name: 'Dhamal',
        price: 500,
        time: ['3PM-6PM', '6PM-9PM']
      },
    ]
  }

  ngOnInit(): void {
    const localData = localStorage.getItem('ticketDetails');
    if (localData != null) {
      this.ticketArray = JSON.parse(localData);
    }
  }
  selectMovie(item: any) {
    debugger
    this.newArray = this.movieArray.find((m: any) => m.name == item)
  }
  totalAmunt() {
    this.movieObj.totalAmount = this.newArray.price * this.movieObj.noOfTickets;
    return this.movieObj.totalAmount
  }
  reset() {
    this.movieObj = {
      movie: '',
      timeSlot: '',
      noOfTickets: 0,
      totalAmount: 0
    }
  }
  bookTicket() {
    if (this.movieObj.noOfTickets != 0) {
      this.ticketArray.push(this.movieObj);
      localStorage.setItem('ticketDetails', JSON.stringify(this.ticketArray));
    }
    else{
      alert("please select no of tickets")
    }
  }
}
