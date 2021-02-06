import { Component, OnInit,Input } from '@angular/core';
import { MockService } from 'src/app/services/mock.service';

@Component({
  selector: 'app-edit-quantity',
  templateUrl: './edit-quantity.component.html',
  styleUrls: ['./edit-quantity.component.scss']
})
export class EditQuantityComponent implements OnInit {

  @Input() quantity = 0;
  @Input() productId;

  constructor(private mockService: MockService) { }

  ngOnInit(): void {
  }


  editQty(action){

    if(action == 'add'){
      this.mockService.updateCart(this.productId, 1);

    } else if(action == 'remove'){
      if(this.quantity == 1){
        this.mockService.removeItem(this.productId);
        this.mockService.removeSelectedItemIndex(this.productId)
      } else{
        this.mockService.updateCart(this.productId, -1);
      }
      
    }

    this.mockService.refreshCart();

  } 

}
