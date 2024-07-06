import { Routes } from '@angular/router';

/* COMPONENTS */
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
];
