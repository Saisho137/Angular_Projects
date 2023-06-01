import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewsRenderComponent } from './reviews-render.component';

describe('ReviewsRenderComponent', () => {
  let component: ReviewsRenderComponent;
  let fixture: ComponentFixture<ReviewsRenderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReviewsRenderComponent]
    });
    fixture = TestBed.createComponent(ReviewsRenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
