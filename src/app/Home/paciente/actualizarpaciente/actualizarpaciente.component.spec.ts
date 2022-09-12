import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarpacienteComponent } from './actualizarpaciente.component';

describe('ActualizarpacienteComponent', () => {
  let component: ActualizarpacienteComponent;
  let fixture: ComponentFixture<ActualizarpacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarpacienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizarpacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
