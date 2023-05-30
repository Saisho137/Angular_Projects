import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddContactSectionComponent } from './add-contact-section.component';

describe('AddContactSectionComponent', () => {
  let component: AddContactSectionComponent;
  let fixture: ComponentFixture<AddContactSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddContactSectionComponent]
    });
    fixture = TestBed.createComponent(AddContactSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
