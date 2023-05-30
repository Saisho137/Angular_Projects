import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactRenderComponent } from './contact-render.component';

describe('ContactRenderComponent', () => {
  let component: ContactRenderComponent;
  let fixture: ComponentFixture<ContactRenderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactRenderComponent]
    });
    fixture = TestBed.createComponent(ContactRenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
