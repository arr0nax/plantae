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

  editPlant(plant) {
    var plantEntry = this.getPlantById(plant.$key);
    plantEntry.update({
      name: plant.name,
      type: plant.type,
      description: plant.description,
      care: plant.care,
      location: plant.location,
      img: plant.img
    });
  }

  deletePlant(plant) {
    var plantEntry = this.getPlantById(plant.$key);
    plantEntry.remove();
  }

}
