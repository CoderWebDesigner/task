import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './modules/about/pages/about/about.component';

const routes: Routes = [
  { path: "", redirectTo: "about", pathMatch: "full" },
  // {path:'about',loadChildren:()=>import('./modules/about/about.module').then(m => m.AboutModule)}
  {path:'about',component:AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
