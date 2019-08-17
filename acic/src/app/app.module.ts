import { BrowserModule            } from '@angular/platform-browser';
import { NgModule                 } from '@angular/core';
import { AppRoutingModule         } from './app-routing.module';
import { AppComponent             } from './app.component';
import { MenuComponent            } from './menu/menu.component';
import { BrowserAnimationsModule  } from '@angular/platform-browser/animations';
import { MaterialModule           } from './material.module';
import { TopoComponent } from './topo/topo.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    TopoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
