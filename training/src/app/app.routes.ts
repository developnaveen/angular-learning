import { Routes } from '@angular/router';
import { Content } from './user/content/content';
import { Dashboard } from './user/dashboard/dashboard';
import { Home } from './user/home/home'

export const routes: Routes = [
    { path: "", component:Home},
    { path: "dashboard", component:Dashboard},
    { path: "content", component:Content},
    {
        path: "admin",
        loadChildren: () =>
            import('./admin/admin.routes').then(m => m.ADMIN_ROUTES)
    },
    {path:"**", redirectTo:""}
];
