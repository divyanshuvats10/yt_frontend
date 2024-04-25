import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { VidComponent } from './vid/vid.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'vid',component:VidComponent}
];

