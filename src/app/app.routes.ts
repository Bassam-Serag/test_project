import { Routes } from '@angular/router';
import { AboutComponent } from './pages/user/about/about.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {path:"",redirectTo:"home",pathMatch:"full"},
    // {path:"",component:HomeComponent},
    {path:"home",component:HomeComponent},
    {path:"about",component:AboutComponent}
];
