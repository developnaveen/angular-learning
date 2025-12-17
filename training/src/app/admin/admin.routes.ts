import { Routes } from '@angular/router';
import { Contentadmin } from './content/content'; 
import { Dashbord } from './dashbord/dashbord'; 
import { Homeadmin } from './home/home'; 

export const ADMIN_ROUTES: Routes = [
    { path: "", component :Homeadmin},
    { path:"admindashboard", component:Dashbord },
    { path:"admincontent", component:Contentadmin}
]