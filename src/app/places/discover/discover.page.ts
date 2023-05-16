import { Component, OnInit } from '@angular/core';
import {PlacesService} from "../../services/places.service";
import {PlaceModel} from "../../models/place.model";

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit {
  loadedPlaces: PlaceModel[];

  constructor(
    private placeService: PlacesService
  ) { }

  ngOnInit() {
    this.loadedPlaces = this.placeService.places;
  }

}
