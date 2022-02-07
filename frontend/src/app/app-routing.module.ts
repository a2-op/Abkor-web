import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuPrincipalComponent } from './components/menu-principal/menu-principal.component';

const routes: Routes = [
  { path: "", component: MenuPrincipalComponent },

  { path: "**", redirectTo: "", pathMatch:"full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
