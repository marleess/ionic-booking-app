import {Component, OnDestroy, OnInit} from '@angular/core';
import {PlacesService} from "../../services/places.service";
import {PlaceModel} from "../../models/place.model";
import {SegmentChangeEventDetail} from "@ionic/angular";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit, OnDestroy {
  loadedPlaces: PlaceModel[];
  listedLoadedPlaces: PlaceModel[];
  private placeSub: Subscription;

  constructor(
    private placeService: PlacesService
  ) {
  }

  ngOnInit() {
    this.placeSub = this.placeService.places.subscribe(places => {
      this.loadedPlaces = places
      this.listedLoadedPlaces = this.loadedPlaces.slice(1);
    });
    console.log(this.placeSub)
  }

  onFilterUpdate(event: Event) {
    const customEvent = event as CustomEvent<SegmentChangeEventDetail>;
  }

  ngOnDestroy() {
    if (this.placeSub) {
      this.placeSub.unsubscribe();
    }
  }
}
