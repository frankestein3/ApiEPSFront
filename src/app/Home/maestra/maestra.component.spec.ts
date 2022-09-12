import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaestraComponent } from './maestra.component';

describe('MaestraComponent', () => {
  let component: MaestraComponent;
  let fixture: ComponentFixture<MaestraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaestraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaestraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
