import { Component, OnInit } from '@angular/core';
import { ComponentService } from '../../Services/component.service';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newpaciente',
  templateUrl: './newpaciente.component.html',
  styleUrls: ['./newpaciente.component.css']
})
export class NewpacienteComponent implements OnInit {

  
  new!: FormGroup;
  public paciente: any;

  constructor(public service: ComponentService, private formBuiler: FormBuilder, private router: Router) { 
    this.new = this.formBuiler.group({
      nmid: new FormControl ('', [Validators.required]),
      nmid_persona: new FormControl ('', [Validators.required]),
      nmid_medicotra: new FormControl ('', [Validators.required]),
      dseps: new FormControl ('', [Validators.required]),
      dsarl: new FormControl ('', [Validators.required]),
      feregistro: new FormControl ('', [Validators.required]),
      febaja: new FormControl ('', [Validators.required]),
      cdusuario: new FormControl ('', [Validators.required]),
      dscondicion: new FormControl ('', [Validators.required]),
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    
    
    this.paciente = this.new.value;
    
    this.service.postPaciente(this.paciente).subscribe(response=> {
      this.router.navigateByUrl("/home");
    });
   
  }

}
