import { Component, OnInit } from '@angular/core';
import { ComponentService } from '../../Services/component.service';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newmaestra',
  templateUrl: './newmaestra.component.html',
  styleUrls: ['./newmaestra.component.css']
})
export class NewmaestraComponent implements OnInit {

  new!: FormGroup;
  public maestra: any;
  public datamaestra: any;

  constructor(public service: ComponentService, private formBuiler: FormBuilder, private router: Router) { 
    this.new = this.formBuiler.group({
      nmaestro: new FormControl ('', [Validators.required]),
      cdmaestro: new FormControl ('', [Validators.required]),
      dsmaestro: new FormControl ('', [Validators.required]),
      febaja: new FormControl ('', [Validators.required]),
      
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    
    
    this.maestra = this.new.value;
    this.datamaestra = {
      nmdato: this.maestra.nmaestro,
      nmmaestro: this.maestra.nmaestro,
      cddato: "cddato00",
      dsdato: "cddato00",
      cddato1: "cddato00",
      cddato2: "cddato00",
      cddato3: "cddato00",
      febaja: "2022-11-09"
    }
    this.service.postDataMaestra(this.datamaestra).subscribe(response=> {
    })
    this.service.postMaestra(this.maestra).subscribe(response=> {
      this.router.navigateByUrl("/home");
    });
   
  }

}
