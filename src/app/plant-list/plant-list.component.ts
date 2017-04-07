import { Component, OnInit } from '@angular/core';
import { PlantService } from '../plant.service'
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Plant } from '../plant'

@Component({
  selector: 'app-plant-list',
  templateUrl: './plant-list.component.html',
  styleUrls: ['./plant-list.component.css'],
  providers: [PlantService]
})
export class PlantListComponent implements OnInit {
  plants: FirebaseListObservable<any[]>;

  constructor(private plantService: PlantService) { }

  ngOnInit() {
    this.plants = this.plantService.getPlants();
  }

}
