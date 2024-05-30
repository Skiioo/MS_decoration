import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevisAdminComponent } from './devis-admin.component';

describe('DevisAdminComponent', () => {
  let component: DevisAdminComponent;
  let fixture: ComponentFixture<DevisAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DevisAdminComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DevisAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
