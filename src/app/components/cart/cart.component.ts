import { Component, OnInit, OnDestroy } from '@angular/core';
import { MockService } from 'src/app/services/mock.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartItems: any;
  priceBreakdown;
  totalPrice = 0;
  constructor(
    private mockService: MockService,
    private router: Router
    ) { }

    
  

  ngOnInit(): void {
    this.mockService.updateCartItems.subscribe(data=>{
      if(data && this.mockService.getCartSession()){
          this.cartItems = this.getCartItems();
          this.mockService.getSelectedIds();
          this.priceBreakdown = this.mockService.getSelectedItems();
          this.totalPrice = this.getTotalPrice(this.priceBreakdown);
      }
    })

    this.cartItems = this.getCartItems();
   
  }

  getCartItems(){
      return this.mockService.getCartSession();
  }

  

  emitPriceBreakdown(event){
    this.priceBreakdown = this.mockService.getSelectedItems();
    this.totalPrice = this.getTotalPrice(this.priceBreakdown);
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

  navigateToCheckOut(){
    if(this.priceBreakdown && this.priceBreakdown.length > 0){
      this.router.navigate(['/checkout']);
    }
  }

}
