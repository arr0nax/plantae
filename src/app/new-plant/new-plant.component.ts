import { Component, OnInit } from '@angular/core';
import { Plant } from '../plant';
import { PlantService } from '../plant.service';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-plant',
  templateUrl: './new-plant.component.html',
  styleUrls: ['./new-plant.component.css'],
  providers: [PlantService]
})
export class NewPlantComponent implements OnInit {

  constructor(private plantService: PlantService, private router: Router) { }

  ngOnInit() {
  }

  submitForm(name, type, description, care, location, img) {
    var newPlant = new Plant(name, type, description, care, location, img);
    this.plantService.savePlant(newPlant);
    this.router.navigate(['']);
  }

}
