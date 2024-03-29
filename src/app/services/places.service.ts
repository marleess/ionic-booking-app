import {Injectable} from '@angular/core';
import {PlaceModel} from "../models/place.model";
import {AuthService} from "./auth.service";
import {BehaviorSubject, map, take} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  constructor(
    private authService: AuthService
  ) {
  }

  private _places = new BehaviorSubject<PlaceModel[]>([
    new PlaceModel(
      'p1',
      'Manhattan Mansion',
      'In the heart of New York City.',
      'https://lonelyplanetimages.imgix.net/mastheads/GettyImages-538096543_medium.jpg?sharp=10&vib=20&w=1200',
      149.99,
      new Date('2019-01-01'),
      new Date('2019-12-01'),
      'abc'
    ),
    new PlaceModel(
      'p2',
      "L'Amour Toujours",
      'A romantic place in Paris!',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Paris_Night.jpg/1024px-Paris_Night.jpg',
      189.99,
      new Date('2019-01-01'),
      new Date('2019-12-01'),
      'abc'
    ),
    new PlaceModel(
      'p3',
      'The Foggy Palace',
      'Not your average city trip!',
      'https://upload.wikimedia.org/wikipedia/commons/0/01/San_Francisco_with_two_bridges_and_the_fog.jpg',
      99.99,
      new Date('2019-01-01'),
      new Date('2019-12-01'),
      'abc'
    ),
    new PlaceModel(
      'p4',
      'The Foggy Palace',
      'Not your average city trip!',
      'https://upload.wikimedia.org/wikipedia/commons/0/01/San_Francisco_with_two_bridges_and_the_fog.jpg',
      99.99,
      new Date('2019-01-01'),
      new Date('2019-12-01'),
      'abc'
    )
  ]);

  get places() {
    return this._places.asObservable();
  }

  getPlace(id: any) {
    return this.places.pipe(take(1), map(place => {
      return {...place.find(p => p.id === id)};
    }));
  }

  addPlace(title: string, description: string, price: number, dateFrom: Date, dateTo: Date) {

    const newPlace = new PlaceModel(
      Math.random().toString(),
      title,
      description,
      'https://upload.wikimedia.org/wikipedia/commons/0/01/San_Francisco_with_two_bridges_and_the_fog.jpg',
      price,
      dateFrom,
      dateTo,
      this.authService.userId
    );

    this.places.pipe(take(1)).subscribe(places => {
      this._places.next(places.concat(newPlace))
    })
  }
}
