import { ComponentFixture, TestBed, async, inject } from '@angular/core/testing';

import { ProductListComponent } from './product-list.component';
import { HttpClientModule } from '@angular/common/http';
import { MockService } from 'src/app/services/mock.service';

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ ProductListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should getProducts', () => {
    spyOn(component, 'getProducts'); 
    component.getProducts();
    expect(component.getProducts).toHaveBeenCalled();
  });

 
});
