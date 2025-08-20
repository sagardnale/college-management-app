import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalDashboardComponent } from './principal-dashboard.component';

describe('PrincipalDashboardComponent', () => {
  let component: PrincipalDashboardComponent;
  let fixture: ComponentFixture<PrincipalDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrincipalDashboardComponent]
    });
    fixture = TestBed.createComponent(PrincipalDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
