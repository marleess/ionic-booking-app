import {Component, Input, OnInit} from '@angular/core';
import {PlaceModel} from "../../models/place.model";
import {ModalController} from "@ionic/angular";

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.scss'],
})
export class CreateBookingComponent implements OnInit {
  @Input() selectedPlace: PlaceModel;
  @Input() selectedMode: 'select' | 'random'
  startDate: Date
  endDate: Date

  constructor(
    private modalCtrl: ModalController
  ) {
  }

  ngOnInit() {
    const avlFrom = new Date(this.selectedPlace.availableFrom)
    const avlTo = new Date(this.selectedPlace.availableTo)

    if (this.selectedMode === "random") {
      this.startDate = new Date(avlFrom.getTime() + Math.random() * (avlTo.getTime() - 7 * 24 * 60 * 60 * 1000 - avlFrom.getTime()))

      this.endDate = new Date(new Date(this.startDate).getTime() + Math.random() * (new Date(this.startDate).getTime() + 6 * 24 * 60 * 60 * 1000 - new Date(this.startDate).getTime()))
    }
  }

  onCancel() {
    this.modalCtrl.dismiss(null, 'cancel');
  }

  onBookPlace() {
    this.modalCtrl.dismiss({
      message: 'Anjay',
    }, 'confirm')
  }

}
