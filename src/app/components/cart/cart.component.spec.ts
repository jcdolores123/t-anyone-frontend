import { ComponentFixture, TestBed, async, inject} from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { CartComponent } from './cart.component';
import { RouterTestingModule } from '@angular/router/testing';
import { MockService } from 'src/app/services/mock.service';

describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule],
      declarations: [ CartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get CartItems', () => {
    let cartItems = component.getCartItems();
    expect(cartItems.length).toBeGreaterThan(0);
  });

  it('should get TotalPrice', async(inject([MockService], (mockService: MockService) => {
    sessionStorage.setItem('selectedItems', JSON.stringify([1]));
    component.priceBreakdown = mockService.getSelectedItems();
    component.totalPrice = component.getTotalPrice(component.priceBreakdown);
    expect(component.totalPrice).toBeGreaterThan(0);
  })));

});
