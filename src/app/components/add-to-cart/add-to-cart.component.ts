import { importType } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit, Input } from '@angular/core';
import { MockService } from 'src/app/services/mock.service';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.scss']
})
export class AddToCartComponent implements OnInit {

  @Input() product;
  constructor(private mockService: MockService) { }

  ngOnInit(): void {
  }


  addToCart(){

    if(this.product){
      this.mockService.addToCart(this.product);
    }


  }

}
