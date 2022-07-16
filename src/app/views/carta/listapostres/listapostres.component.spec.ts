import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListapostresComponent } from './listapostres.component';

describe('ListapostresComponent', () => {
  let component: ListapostresComponent;
  let fixture: ComponentFixture<ListapostresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListapostresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListapostresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
