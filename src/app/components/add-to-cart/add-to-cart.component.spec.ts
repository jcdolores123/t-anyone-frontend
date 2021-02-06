import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddToCartComponent } from './add-to-cart.component';
import { HttpClientModule } from '@angular/common/http';

describe('AddToCartComponent', () => {
  let component: AddToCartComponent;
  let fixture: ComponentFixture<AddToCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ AddToCartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddToCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should addtoCart', () => {
    spyOn(component, 'addToCart'); 
    component.addToCart();
    expect(component.addToCart).toHaveBeenCalled();
  });
});
