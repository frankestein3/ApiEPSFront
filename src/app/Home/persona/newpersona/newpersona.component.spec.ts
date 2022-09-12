import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewpersonaComponent } from './newpersona.component';

describe('NewpersonaComponent', () => {
  let component: NewpersonaComponent;
  let fixture: ComponentFixture<NewpersonaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewpersonaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewpersonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
