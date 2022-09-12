import { Component, OnInit } from '@angular/core';
import { ComponentService } from '../Services/component.service';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-maestra',
  templateUrl: './maestra.component.html',
  styleUrls: ['./maestra.component.css']
})
export class MaestraComponent implements OnInit {

  consulta!: FormGroup;
  band=false;
  maestra: any;
  constructor(public service: ComponentService, private formBuiler: FormBuilder) {
    this.consulta = this.formBuiler.group({
      id: new FormControl ('', [Validators.required]),
    })
   }

  ngOnInit(): void {
  }
  onSubmit(form: any) {
    this.band=true;
    this.service.getMaestra(form.id).subscribe((res) => {
      this.maestra=res;
    });
  }

}
