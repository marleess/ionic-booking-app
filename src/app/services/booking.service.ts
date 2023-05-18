import {Injectable} from '@angular/core';
import {BookingModel} from "../models/booking.model";

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  private _bookings: BookingModel[] = [
    {
      id: 'asd',
      placeId: 'p1',
      placeTitle: 'Karawang',
      guestNumber: 2,
      userId: 'bcd'
    }
  ];

  get bookings() {
    return [...this._bookings]
  }
}
