import { Component, OnInit, Input } from '@angular/core';
import { PlantService } from '../plant.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-edit-plant',
  templateUrl: './edit-plant.component.html',
  styleUrls: ['./edit-plant.component.css'],
  providers: [PlantService]
})
export class EditPlantComponent implements OnInit {
  @Input() plant;

  constructor(private plantService: PlantService, private router: Router) { }

  ngOnInit() {
  }

  editPlant(plant) {
    this.plantService.editPlant(plant);
  }

  deletePlant(plant) {
    if(confirm("This will permanently remove the plant. Do you want to continue?")) {
      this.plantService.deletePlant(plant);
      this.router.navigate(['']);
    }
  }

}
