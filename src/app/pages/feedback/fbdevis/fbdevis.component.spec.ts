import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FbdevisComponent } from './fbdevis.component';

describe('FbdevisComponent', () => {
  let component: FbdevisComponent;
  let fixture: ComponentFixture<FbdevisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FbdevisComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FbdevisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
