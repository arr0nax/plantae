import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlantListComponent } from './plant-list/plant-list.component';
import { PlantDetailComponent } from './plant-detail/plant-detail.component';

const appRoutes: Routes = [
  {
    path: '',
    component: PlantListComponent
  }, {
    path: 'plant/:id',
    component: PlantDetailComponent
  }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
