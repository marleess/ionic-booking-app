import { Component, OnInit } from '@angular/core';
import {PlaceModel} from "../../models/place.model";
import {PlacesService} from "../../services/places.service";
import {register} from "swiper/element/bundle";
import {IonItemSliding} from "@ionic/angular";
import {Router} from "@angular/router";

register();

@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
})
export class OffersPage implements OnInit {
  offers: PlaceModel[];
  constructor(
    private placeService: PlacesService,
    private router: Router
  ) { }

  ngOnInit() {
    this.offers = this.placeService.places;
  }

  onEdit(offerId: string, slidingItem: IonItemSliding){
    slidingItem.close();
    this.router.navigate(['/', 'places', 'tabs', 'offers', 'edit', offerId]);
    console.log(offerId)
  }

}
