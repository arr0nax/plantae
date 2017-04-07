import { Component, OnInit } from '@angular/core';
import { Plant } from '../plant'
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { PlantService } from '../plant.service';
import { FirebaseObjectObservable } from 'angularfire2';

@Component({
  selector: 'app-plant-detail',
  templateUrl: './plant-detail.component.html',
  styleUrls: ['./plant-detail.component.css'],
  providers: [PlantService]
})
export class PlantDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private location: Location, private plantService: PlantService) { }
  plantId: string;
  plant;

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
     this.plantId = urlParameters['id'];
   });
   this.plant = this.plantService.getPlantById(this.plantId)
 }

}
