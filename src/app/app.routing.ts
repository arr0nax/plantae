import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlantListComponent } from './plant-list/plant-list.component'

const appRoutes: Routes = [
  {
    path: '',
    component: PlantListComponent
  }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
