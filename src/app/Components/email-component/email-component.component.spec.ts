import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailComponentComponent } from './email-component.component';

describe('EmailComponentComponent', () => {
  let component: EmailComponentComponent;
  let fixture: ComponentFixture<EmailComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmailComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmailComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
