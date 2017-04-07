import { Injectable } from '@angular/core';
import { Plant } from './plant';
import { AngularFire, FirebaseListObservable } from 'angularfire2';


@Injectable()
export class PlantService {
  plants: FirebaseListObservable<any[]>

  constructor(private af: AngularFire) {
    this.plants = af.database.list('plants');
  }

  getPlants() {
    return this.plants;
  }

  getPlantById(plantId: string) {
    return this.af.database.object('plants/'+plantId);
  }

}
