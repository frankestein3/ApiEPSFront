import { Component, OnInit } from '@angular/core';
import { ComponentService } from '../Services/component.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  band=false;
  bandpersonas=false;
  bandmaestra=false;
  pacientes: any;
  personas: any;
  maestras: any;
  constructor(public service: ComponentService) { }

  ngOnInit(): void {
  }

  consultar(){
    this.band=true;
    this.service.getPacientes().subscribe((res) => {
      this.pacientes=res;
      
    });
 
  }
  consultarPersonas(){
    this.bandpersonas=true;
    this.service.getPersonas().subscribe((res) => {
      this.personas=res;
      
    });
  }
  consultarMaestras(){
    this.bandmaestra=true;
    this.service.getMaestras().subscribe((res) => {
      this.maestras=res;
      
    });
  }
}
