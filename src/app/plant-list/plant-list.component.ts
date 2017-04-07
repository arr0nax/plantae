import { Component, OnInit } from '@angular/core';
import { PlantService } from '../plant.service'
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Plant } from '../plant'
import { Router } from '@angular/router';

@Component({
  selector: 'app-plant-list',
  templateUrl: './plant-list.component.html',
  styleUrls: ['./plant-list.component.css'],
  providers: [PlantService]
})
export class PlantListComponent implements OnInit {
  plants: FirebaseListObservable<any[]>;
  filterByType: string = 'all';

  constructor(private plantService: PlantService, private router: Router) { }

  ngOnInit() {
    this.plants = this.plantService.getPlants();
  }

  goToPlant(plant) {
    console.log(plant.$key)
    this.router.navigate(['plant', plant.$key])
  }

  onTypeChange(type) {
    this.filterByType = type;
  }

}
