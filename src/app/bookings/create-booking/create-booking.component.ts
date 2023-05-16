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

  constructor(
    private modalCtrl: ModalController
  ) {
  }

  ngOnInit() {
  }

  onCancel(){
    this.modalCtrl.dismiss(null, 'cancel');
  }

  onBookPlace() {
    this.modalCtrl.dismiss({
      message: 'Anjay',
    }, 'confirm')
  }

}
