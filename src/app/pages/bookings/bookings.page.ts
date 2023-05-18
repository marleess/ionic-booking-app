import { Component, OnInit } from '@angular/core';
import {BookingService} from "../../services/booking.service";
import {BookingModel} from "../../models/booking.model";
import {IonItemSliding} from "@ionic/angular";

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.page.html',
  styleUrls: ['./bookings.page.scss'],
})
export class BookingsPage implements OnInit {

  loadedBookings: BookingModel[];

  constructor(
    private bookingService: BookingService
  ) { }

  ngOnInit() {
    this.loadedBookings = this.bookingService.bookings;
  }

  onCancelBooking(offerId: string, slidingEl: IonItemSliding){
    slidingEl.close();

  }

}
