import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaracionesComponent } from './listaraciones.component';

describe('ListaracionesComponent', () => {
  let component: ListaracionesComponent;
  let fixture: ComponentFixture<ListaracionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaracionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaracionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
