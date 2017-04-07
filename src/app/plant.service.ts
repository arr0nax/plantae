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

  savePlant(newPlant) {
    this.plants.push(newPlant);
  }

  editPlant(plantId, name,type,description,care,location,img) {
    var plantEntry = this.getPlantById(plantId);
    plantEntry.update({
      name: name,
      type: type,
      description: description,
      care: care,
      location: location,
      img: img
    });
  }

  deletePlant(plantId) {
    var plantEntry = this.getPlantById(plantId);
    plantEntry.remove();
  }

}
