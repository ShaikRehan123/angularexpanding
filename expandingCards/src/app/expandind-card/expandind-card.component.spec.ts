import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpandindCardComponent } from './expandind-card.component';

describe('ExpandindCardComponent', () => {
  let component: ExpandindCardComponent;
  let fixture: ComponentFixture<ExpandindCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpandindCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpandindCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
