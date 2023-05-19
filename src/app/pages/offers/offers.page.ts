import {Component, OnDestroy, OnInit} from '@angular/core';
import {PlaceModel} from "../../models/place.model";
import {PlacesService} from "../../services/places.service";
import {register} from "swiper/element/bundle";
import {IonItemSliding} from "@ionic/angular";
import {Router} from "@angular/router";
import {Subscription} from "rxjs";

register();

@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
})
export class OffersPage implements OnInit, OnDestroy {
  offers: PlaceModel[];
  private placeSub: Subscription;

  constructor(
    private placeService: PlacesService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.placeSub = this.placeService.places.subscribe(places => {
      this.offers = places;
    })
  }

  onEdit(offerId: string, slidingItem: IonItemSliding) {
    slidingItem.close();
    this.router.navigate(['/', 'places', 'tabs', 'offers', 'edit', offerId]);
    console.log(offerId)
  }

  ngOnDestroy() {
    if (this.placeSub) {
      this.placeSub.unsubscribe();
    }
  }
}
