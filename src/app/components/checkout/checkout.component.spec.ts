import { ComponentFixture, TestBed, async, inject } from '@angular/core/testing';

import { CheckoutComponent } from './checkout.component';
import { HttpClientModule } from '@angular/common/http';
import { MockService } from 'src/app/services/mock.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('CheckoutComponent', () => {
  let component: CheckoutComponent;
  let fixture: ComponentFixture<CheckoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule],
      declarations: [ CheckoutComponent ],
      providers: [MockService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should get total price', async(inject([MockService], (mockService: MockService) => {
    sessionStorage.setItem('selectedItems', JSON.stringify([1]));
    component.checkoutItems = mockService.getSelectedItems();
    component.totalPrice = component.getTotalPrice(component.checkoutItems);
    expect(component.totalPrice).toBeGreaterThan(0);
  })));


  
});
