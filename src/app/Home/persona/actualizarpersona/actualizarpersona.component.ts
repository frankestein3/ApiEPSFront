import { Component, OnInit } from '@angular/core';
import { ComponentService } from '../../Services/component.service';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-actualizarpersona',
  templateUrl: './actualizarpersona.component.html',
  styleUrls: ['./actualizarpersona.component.css']
})
export class ActualizarpersonaComponent implements OnInit {

  update!: FormGroup;
  
  public persona: any;
  public data:any;


  constructor(public service: ComponentService, private formBuiler: FormBuilder, private router: Router) { 
    this.update = this.formBuiler.group({
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
    
    
    this.persona = this.update.value;
    this.service.putPersona(this.persona.cddocumento, this.persona).subscribe(response=> {
      this.router.navigateByUrl("/home");
    });
   
  }



}
