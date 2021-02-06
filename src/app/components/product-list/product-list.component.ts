import { Component, OnInit } from '@angular/core';
import { MockService} from 'src/app/services/mock.service';
import { takeWhile, map } from 'rxjs/operators';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products;

  constructor(private mockService: MockService) { }

  ngOnInit(): void {
    this.getProducts();
  }


  getProducts(){
    this.mockService.getMockProducts().subscribe((data: any)=>{
      this.products = data.products;
    }) 
  }

}
