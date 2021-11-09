import { Routes } from "@angular/router";
import { NotFoundComponent } from "./components/not-found/not-found.component";

export const APP_ROUTES: Routes = [
    {path: '', loadChildren: () => import('./components/components.module').then((m) => m.ComponentsModule)},
    {path: 'directives', loadChildren: () => import('./directives/directives.module').then((m) => m.DirectivesModule)},
    {path: 'pipes', loadChildren: () => import('./pipes/pipes.module').then((m) => m.PipesModule)},
    {path: 'services', loadChildren: () => import('./services/services.module').then((m) => m.ServicesModule)},
    {path: 'others', loadChildren: () => import('./others/others.module').then((m) => m.OthersModule)},
    {path: '**', component: NotFoundComponent}
];