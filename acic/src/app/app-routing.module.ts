import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { app } from 'firebase';
import { AppComponent } from './app.component';
import { IntranetComponent } from './intranet/intranet.component';
import { PrincipalComponent } from './principal/principal.component';


const routes: Routes = [
  { path: '', component: PrincipalComponent },
  { path: 'intranet', component: IntranetComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
