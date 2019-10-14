import { BrowserModule            } from '@angular/platform-browser';
import { NgModule                 } from '@angular/core';
import { AppRoutingModule         } from './app-routing.module';
import { AppComponent             } from './app.component';
import { MenuComponent            } from './menu/menu.component';
import { BrowserAnimationsModule  } from '@angular/platform-browser/animations';
import { MaterialModule           } from './material.module';
import { SlideshowModule          } from 'ng-simple-slideshow';

import { TopoComponent            } from './topo/topo.component';
import { HttpClientModule         } from '@angular/common/http';
import { BannerPrincipalComponent } from './banner-principal/banner-principal.component';
import { NoticiasDestaqueComponent } from './noticias-destaque/noticias-destaque.component';
import { FooterComponent } from './footer/footer.component';
import { ImpostometroComponent } from './impostometro/impostometro.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    TopoComponent,
    BannerPrincipalComponent,
    NoticiasDestaqueComponent,
    FooterComponent,
    ImpostometroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    SlideshowModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
  }
 }
