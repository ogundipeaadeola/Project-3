import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportsinfoComponent } from './sportsinfo.component';

describe('SportsinfoComponent', () => {
  let component: SportsinfoComponent;
  let fixture: ComponentFixture<SportsinfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SportsinfoComponent]
    });
    fixture = TestBed.createComponent(SportsinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
