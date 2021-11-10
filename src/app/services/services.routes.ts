import { Routes } from "@angular/router";
import { ServiceDocumentationComponent } from "./service-documentation/service-documentation.component";

export const SERVICE_ROUTES: Routes = [
    {path: '', component: ServiceDocumentationComponent},
    {path: ':id', component: ServiceDocumentationComponent} //usually have a different component. 
];