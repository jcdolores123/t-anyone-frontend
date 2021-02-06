import { Component, OnInit } from '@angular/core';
import { MockService } from 'src/app/services/mock.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  checkoutItems;

  totalPrice = 0;


  constructor(
    private mockService: MockService,
    private router: Router) { }

  ngOnInit(): void {

    this.checkoutItems = this.mockService.getSelectedItems();
    if(this.checkoutItems){
      this.totalPrice = this.getTotalPrice(this.checkoutItems);
    }

  }


  getTotalPrice(priceBreakdown){
    let total = 0;
    if(priceBreakdown && priceBreakdown.length > 0){
      priceBreakdown.forEach(data => {
        total += data.price * data.qty;
      });
    }

    return total;
  }

  placeOrder(){
    sessionStorage.clear();
    this.mockService.getCartCount();
    this.router.navigate(['/'])

  }

}
