import { Component, OnInit } from '@angular/core';
import { ComponentService } from '../../Services/component.service';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newpersona',
  templateUrl: './newpersona.component.html',
  styleUrls: ['./newpersona.component.css']
})
export class NewpersonaComponent implements OnInit {

  new!: FormGroup;
  public persona: any;
  
  constructor(public service: ComponentService, private formBuiler: FormBuilder, private router: Router) { 
    this.new = this.formBuiler.group({
      nmid: new FormControl ('', [Validators.required]),
      cddocumento: new FormControl ('', [Validators.required]),
      dsnombres: new FormControl ('', [Validators.required]),
      dsapellidos: new FormControl ('', [Validators.required]),
      fenacimiento: new FormControl ('', [Validators.required]),
      cdtipo: new FormControl ('', [Validators.required]),
      cdgenero: new FormControl ('', [Validators.required]),
      feregistro: new FormControl ('', [Validators.required]),
      febaja: new FormControl ('', [Validators.required]),
      cdusuario: new FormControl ('', [Validators.required]),
      dsdireccion: new FormControl ('', [Validators.required]),
      dsphoto: new FormControl ('', [Validators.required]),
      cdtelefono_fijo: new FormControl ('', [Validators.required]),
      cdtelefono_movil: new FormControl ('', [Validators.required]),
      dsemail: new FormControl ('', [Validators.required, Validators.email]),
    })
  }

  ngOnInit(): void {
  }
  onSubmit() {
    
    
    this.persona = this.new.value;
    
    this.service.postPersona(this.persona).subscribe(response=> {
      this.router.navigateByUrl("/home");
    });
   
  }

}
