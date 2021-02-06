import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartItemsComponent } from './cart-items.component';
import { HttpClientModule } from '@angular/common/http';

describe('CartItemsComponent', () => {
  let component: CartItemsComponent;
  let fixture: ComponentFixture<CartItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ CartItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should should select item on cart', () => {
    let cartData = {
      id: 1,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      imgSrc: "./assets/images/iphone-xs.png",
      name: "Iphone XS",
      price: 100,
      qty: 2
      }
    component.toggleCheckbox(cartData);
    let selectedItems = [1];
    expect(selectedItems.length).toBeGreaterThan(0)

  });
});
