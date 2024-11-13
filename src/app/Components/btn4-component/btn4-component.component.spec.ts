import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Btn4ComponentComponent } from './btn4-component.component';

describe('Btn4ComponentComponent', () => {
  let component: Btn4ComponentComponent;
  let fixture: ComponentFixture<Btn4ComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Btn4ComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Btn4ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
