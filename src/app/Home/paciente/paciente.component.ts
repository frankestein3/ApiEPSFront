import { Component, OnInit } from '@angular/core';
import { ComponentService } from '../Services/component.service';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.css']
})
export class PacienteComponent implements OnInit {

  consulta!: FormGroup;
  band=false;
  paciente: any;
  constructor(public service: ComponentService, private formBuiler: FormBuilder) { 
    this.consulta = this.formBuiler.group({
      id: new FormControl ('', [Validators.required]),
    })
  }

  ngOnInit(): void {
  }

  onSubmit(form: any) {
    this.band=true;
    this.service.getPaciente(form.id).subscribe((res) => {
      this.paciente=res;
    });
  }
}
