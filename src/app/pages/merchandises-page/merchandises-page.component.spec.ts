import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchandisesPageComponent } from './merchandises-page.component';

describe('MerchandisesPageComponent', () => {
  let component: MerchandisesPageComponent;
  let fixture: ComponentFixture<MerchandisesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MerchandisesPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MerchandisesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
