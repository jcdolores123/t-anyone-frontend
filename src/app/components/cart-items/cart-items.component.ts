import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MockService } from 'src/app/services/mock.service';

@Component({
  selector: 'app-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.scss']
})
export class CartItemsComponent implements OnInit {

  @Input() cartItems;
  @Output() emitPriceBreakdown = new EventEmitter<any>();
  @Input() hideButtons = false;
  constructor(private mockService: MockService) { }

  ngOnInit(): void {


  }

  toggleCheckbox(cart){
    
   this.mockService.setSelectedItems(cart.id);
    
   this.emitPriceBreakdown.emit(true)
  }

  

}
