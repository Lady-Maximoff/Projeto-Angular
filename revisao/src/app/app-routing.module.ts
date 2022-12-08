import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormularioComponent } from './wallpaper/formulario/formulario.component';
import { FotolistComponent } from './wallpaper/fotolist/fotolist.component';

const routes: Routes = [
  {path: 'formulario', component: FormularioComponent},
  {path: '', component: FotolistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
