import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoCrearEditarComponent } from './producto-crear-editar.component';

describe('ProductoCrearEditarComponent', () => {
  let component: ProductoCrearEditarComponent;
  let fixture: ComponentFixture<ProductoCrearEditarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductoCrearEditarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductoCrearEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
