import { Component, OnInit, Input } from '@angular/core';
import { PlantService } from '../plant.service';
import { Router } from '@angular/router'
import { Plant } from '../plant'
import { Location } from '@angular/common';
import { ActivatedRoute, Params } from '@angular/router';




@Component({
  selector: 'app-edit-plant',
  templateUrl: './edit-plant.component.html',
  styleUrls: ['./edit-plant.component.css'],
  providers: [PlantService]
})
export class EditPlantComponent implements OnInit {
  plantId;
  plant;

  constructor(private plantService: PlantService, private router: Router, private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
     this.plantId = urlParameters['id'];
   });
   this.plant = this.plantService.getPlantById(this.plantId)
  }

  // editPlant() {
  //   console.log(this.plant);
  //   this.plantService.editPlant(this.plant);
  // }

  deletePlant() {
    if(confirm("This will permanently remove the plant. Do you want to continue?")) {
      this.plantService.deletePlant(this.plant);
      this.router.navigate(['']);
    }
  }

}
