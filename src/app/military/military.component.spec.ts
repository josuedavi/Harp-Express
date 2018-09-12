import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MilitaryComponent } from './military.component';

describe('MilitaryComponent', () => {
  let component: MilitaryComponent;
  let fixture: ComponentFixture<MilitaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MilitaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MilitaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
