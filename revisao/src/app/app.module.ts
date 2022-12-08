import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { WallpaperModule } from './wallpaper/wallpaper.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    CoreModule,
    WallpaperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
