import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensDetailsComponent } from './mens-details.component';


describe('MensDetailsComponent', () => {
  let component: MensDetailsComponent;
  let fixture: ComponentFixture<MensDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MensDetailsComponent]
    });
    fixture = TestBed.createComponent(MensDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
