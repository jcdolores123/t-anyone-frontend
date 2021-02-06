import { Component, OnInit } from '@angular/core';
import { MockService } from 'src/app/services/mock.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  cartCount = 0;
  constructor(
    private mockService: MockService,
    private router: Router) { }

  ngOnInit(): void {
    var cartItems = this.mockService.getCartSession();
    this.mockService.updateCartCount.subscribe(data=>{
      if(data){
        cartItems = this.mockService.getCartSession();
        this.cartCount = this.getCartQty(cartItems);
      }

    })

    this.cartCount = this.getCartQty(cartItems);
  }

  getCartQty(items){
    let qty = 0;

    if(items && items.length > 0){
      items.forEach(item => {
        qty += item.qty;
      });
    }

    return qty;

  }
  
  navigateToCart(){
    if(this.cartCount > 0 && this.router.url !== '/cart'){
      this.mockService.removeSelectedItems()
      this.router.navigate(['/cart'])
    }
  }
}
