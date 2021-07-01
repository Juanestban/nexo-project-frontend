import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOrEditMerchPageComponent } from './add-or-edit-merch-page.component';

describe('AddOrEditMerchPageComponent', () => {
  let component: AddOrEditMerchPageComponent;
  let fixture: ComponentFixture<AddOrEditMerchPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddOrEditMerchPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOrEditMerchPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
