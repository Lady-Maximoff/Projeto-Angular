import { NgModule } from '@angular/core';
import { FotolistComponent } from './fotolist/fotolist.component';

import { FotosComponent } from './fotos/fotos.component';
import { SharedModule } from '../shared/shared.module';
import { FormularioComponent } from './formulario/formulario.component';


@NgModule({
  declarations: [
    FotolistComponent,
    FotosComponent,
    FormularioComponent
  ],
  imports: [
    SharedModule
  ],
 exports: [
  
    FotolistComponent,
    FotosComponent
  ] 
})
export class WallpaperModule { }
