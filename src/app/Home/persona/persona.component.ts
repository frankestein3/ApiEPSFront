import { Component, OnInit } from '@angular/core';
import { ComponentService } from '../Services/component.service';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})



export class PersonaComponent implements OnInit {

  consulta!: FormGroup;
  band=false;
  persona: any;
  constructor(public service: ComponentService, private formBuiler: FormBuilder) { 
    this.consulta = this.formBuiler.group({
      id: new FormControl ('', [Validators.required]),
    })
  }

  ngOnInit(): void {
    
    
  }
  onSubmit(form: any) {
    this.band=true;
    this.service.getPersona(form.id).subscribe((res) => {
      this.persona=res;
    });
  }

}
