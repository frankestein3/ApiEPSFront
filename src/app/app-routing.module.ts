import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Home/home/home.component';
import { PersonaComponent } from './Home/persona/persona.component';
import { NewpersonaComponent } from './Home/persona/newpersona/newpersona.component';
import { ActualizarpersonaComponent } from './Home/persona/actualizarpersona/actualizarpersona.component';
import { PacienteComponent } from './Home/paciente/paciente.component';
import { NewpacienteComponent } from './Home/paciente/newpaciente/newpaciente.component';
import { ActualizarpacienteComponent } from './Home/paciente/actualizarpaciente/actualizarpaciente.component';
import { NewmaestraComponent } from './Home/maestra/newmaestra/newmaestra.component';
import { EditmaestraComponent } from './Home/maestra/editmaestra/editmaestra.component';
import { MaestraComponent } from './Home/maestra/maestra.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'persona', component: PersonaComponent},
  {path: 'paciente', component: PacienteComponent},
  {path: 'newpersona', component: NewpersonaComponent},
  {path: 'newpaciente', component: NewpacienteComponent},
  {path: 'actualizarpaciente', component: ActualizarpacienteComponent},
  {path: 'actualizarpersona', component: ActualizarpersonaComponent},
  {path: 'maestra', component: MaestraComponent},
  {path: 'editmaestra', component: EditmaestraComponent},
  {path: 'newmaestra', component: NewmaestraComponent},
  {path: "**", redirectTo: 'home', pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
