import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GreetingPopupComponent } from './greeting-popup.component';

describe('GreetingPopupComponent', () => {
  let component: GreetingPopupComponent;
  let fixture: ComponentFixture<GreetingPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GreetingPopupComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GreetingPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
