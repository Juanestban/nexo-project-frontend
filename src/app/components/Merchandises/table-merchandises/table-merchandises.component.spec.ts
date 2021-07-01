import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableMerchandisesComponent } from './table-merchandises.component';

describe('TableMerchandisesComponent', () => {
  let component: TableMerchandisesComponent;
  let fixture: ComponentFixture<TableMerchandisesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableMerchandisesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableMerchandisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
