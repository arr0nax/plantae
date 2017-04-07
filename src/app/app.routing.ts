import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlantListComponent } from './plant-list/plant-list.component';
import { PlantDetailComponent } from './plant-detail/plant-detail.component';
import { AboutComponent } from './about/about.component';
import { NewPlantComponent } from './new-plant/new-plant.component';

const appRoutes: Routes = [
  {
    path: '',
    component: PlantListComponent
  }, {
    path: 'plant/:id',
    component: PlantDetailComponent
  }, {
    path: 'about',
    component: AboutComponent
  }, {
    path: 'new-plant',
    component: NewPlantComponent
  }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
