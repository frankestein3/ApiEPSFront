import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewmaestraComponent } from './newmaestra.component';

describe('NewmaestraComponent', () => {
  let component: NewmaestraComponent;
  let fixture: ComponentFixture<NewmaestraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewmaestraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewmaestraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
