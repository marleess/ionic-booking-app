import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ActionSheetController, ModalController, NavController} from "@ionic/angular";
import {PlacesService} from "../../services/places.service";
import {CreateBookingComponent} from "../create-booking/create-booking.component";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit, OnDestroy {
  place: any;
  private placeSub: Subscription

  constructor(
    private activatedRoute: ActivatedRoute,
    private navCtrl: NavController,
    private placesService: PlacesService,
    private modalController: ModalController,
    private actionSheetCtrl: ActionSheetController
  ) {
  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {

      if (!paramMap.has('placeId')) {
        this.navCtrl.navigateBack('/places/tabs/discover');
        return;
      }

      this.placeSub = this.placesService.getPlace(paramMap.get('placeId')).subscribe(place => {
        this.place = place
      });

    });
  }

  onBookPlace() {
    // this.router.navigateByUrl('/places/tabs/discover');
    // this.navCtrl.navigateBack('/places/tabs/discover');

    this.actionSheetCtrl.create({
      header: 'What You Choose?',
      mode: 'ios',
      buttons: [
        {
          text: 'Select Date',
          handler: () => this.onBookingModal('select')
        },
        {
          text: 'Random Date',
          handler: () => this.onBookingModal('random')
        },
        {
          text: 'Cancel',
          role: 'destructive'
        }
      ]
    }).then(r => {
      r.present();
    });
  }

  onBookingModal(mode: 'select' | 'random'){
    console.log(mode)
    this.modalController
      .create({
        component: CreateBookingComponent,
        componentProps: {selectedPlace: this.place, selectedMode: mode},
      })
      .then(modalEl => {
        modalEl.present();
        return modalEl.onDidDismiss();
      })
      .then(resData => {
        console.log(resData.data, resData.role);
        if (resData.role === 'confirm') {
          console.log('BOOKED!')
        }
      })
  }


  ngOnDestroy() {
    if (this.placeSub) {
      this.placeSub.unsubscribe()
    }
  }
}
