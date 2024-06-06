import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FbcontactComponent } from './fbcontact.component';

describe('FbcontactComponent', () => {
  let component: FbcontactComponent;
  let fixture: ComponentFixture<FbcontactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FbcontactComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FbcontactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
