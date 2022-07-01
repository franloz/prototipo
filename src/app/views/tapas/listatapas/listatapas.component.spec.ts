import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListatapasComponent } from './listatapas.component';

describe('ListatapasComponent', () => {
  let component: ListatapasComponent;
  let fixture: ComponentFixture<ListatapasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListatapasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListatapasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
