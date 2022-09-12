import { Component, OnInit } from '@angular/core';
import { ComponentService } from '../../Services/component.service';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-editmaestra',
  templateUrl: './editmaestra.component.html',
  styleUrls: ['./editmaestra.component.css']
})
export class EditmaestraComponent implements OnInit {

  update!: FormGroup;
  public maestra: any;

  constructor(public service: ComponentService, private formBuiler: FormBuilder, private router: Router) {
    this.update = this.formBuiler.group({
      nmaestro: new FormControl ('', [Validators.required]),
      cdmaestro: new FormControl ('', [Validators.required]),
      dsmaestro: new FormControl ('', [Validators.required]),
      febaja: new FormControl ('', [Validators.required]),
      
    })
   }

  ngOnInit(): void {
  }

  onSubmit() {
    
    
    this.maestra = this.update.value;
    this.service.putMaestra(this.maestra.nmaestro, this.maestra).subscribe(response=> {
      this.router.navigateByUrl("/home");
    });

   
   
  }

}
