import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtreinosComponent } from './addtreinos.component';

describe('AddtreinosComponent', () => {
  let component: AddtreinosComponent;
  let fixture: ComponentFixture<AddtreinosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddtreinosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddtreinosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
