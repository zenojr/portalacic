import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { app } from 'firebase';
import { AppComponent } from './app.component';
import { IntranetComponent } from './intranet/intranet.component';
import { PrincipalComponent } from './principal/principal.component';
import { SolutionPrincipalComponent } from './solucoes/solution-principal/solution-principal.component';
import { SobreComponent } from './sobre/sobre.component';
import { NucleosComponent } from './nucleos/nucleos.component';
import { NoticiasFullComponent } from './noticias-full/noticias-full.component';
import { AgendaComponent } from './agenda/agenda.component';
import { ContadoresComponent } from './nucleos/contadores/contadores.component';

const routes: Routes = [
  { path: '', component: PrincipalComponent },
  { path: 'solucoes', component: SolutionPrincipalComponent },
  { path: 'intranet', component: IntranetComponent },
  { path: 'sobre', component: SobreComponent },
  { path: 'nucleos', component: NucleosComponent },
  { path: 'noticias', component: NoticiasFullComponent },
  { path: 'agenda', component: AgendaComponent },
  { path: 'nucleocontadores', component: ContadoresComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
