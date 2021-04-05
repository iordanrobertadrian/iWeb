import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentationWebsiteComponent } from './presentation-website.component';

describe('PresentationWebsiteComponent', () => {
  let component: PresentationWebsiteComponent;
  let fixture: ComponentFixture<PresentationWebsiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PresentationWebsiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentationWebsiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
