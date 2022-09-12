import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Home/home/home.component';
import { PersonaComponent } from './Home/persona/persona.component';
import { PacienteComponent } from './Home/paciente/paciente.component';
import { MaestraComponent } from './Home/maestra/maestra.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatInputModule} from '@angular/material/input';
import { ComponentService } from './Home/Services/component.service';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import { NewpersonaComponent } from './Home/persona/newpersona/newpersona.component';
import { ActualizarpersonaComponent } from './Home/persona/actualizarpersona/actualizarpersona.component';
import { NewpacienteComponent } from './Home/paciente/newpaciente/newpaciente.component';
import { ActualizarpacienteComponent } from './Home/paciente/actualizarpaciente/actualizarpaciente.component';
import { NewmaestraComponent } from './Home/maestra/newmaestra/newmaestra.component';
import { EditmaestraComponent } from './Home/maestra/editmaestra/editmaestra.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PersonaComponent,
    PacienteComponent,
    MaestraComponent,
    NewpersonaComponent,
    ActualizarpersonaComponent,
    NewpacienteComponent,
    ActualizarpacienteComponent,
    NewmaestraComponent,
    EditmaestraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    HttpClientModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule
  ],
  providers: [ComponentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
