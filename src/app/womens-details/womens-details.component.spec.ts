import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomenDetailsComponent } from './womens-details.component';


describe('WomensDetailsComponent', () => {
  let component: WomenDetailsComponent;
  let fixture: ComponentFixture<WomenDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WomenDetailsComponent]
    });
    fixture = TestBed.createComponent(WomenDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
