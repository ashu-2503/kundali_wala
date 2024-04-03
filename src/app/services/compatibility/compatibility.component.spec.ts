import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompatibilityComponent } from './compatibility.component';

describe('CompatibilityComponent', () => {
  let component: CompatibilityComponent;
  let fixture: ComponentFixture<CompatibilityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompatibilityComponent]
    });
    fixture = TestBed.createComponent(CompatibilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
