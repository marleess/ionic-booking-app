import { Component, OnInit } from '@angular/core';
import {PlacesService} from "../../services/places.service";
import {PlaceModel} from "../../models/place.model";
import {SegmentChangeEventDetail} from "@ionic/angular";

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit {
  loadedPlaces: PlaceModel[];
  listedLoadedPlaces: PlaceModel[];


  constructor(
    private placeService: PlacesService
  ) { }

  ngOnInit() {
    this.loadedPlaces = this.placeService.places;
    this.listedLoadedPlaces = this.loadedPlaces.slice(1);
  }

  onFilterUpdate(event: Event) {
    const customEvent = event as CustomEvent<SegmentChangeEventDetail>;
    console.log(customEvent.detail);


  }

}
