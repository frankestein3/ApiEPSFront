import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditmaestraComponent } from './editmaestra.component';

describe('EditmaestraComponent', () => {
  let component: EditmaestraComponent;
  let fixture: ComponentFixture<EditmaestraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditmaestraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditmaestraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
