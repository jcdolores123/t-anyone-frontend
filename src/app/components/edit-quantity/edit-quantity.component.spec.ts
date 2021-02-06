import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditQuantityComponent } from './edit-quantity.component';
import { HttpClientModule } from '@angular/common/http';

describe('EditQuantityComponent', () => {
  let component: EditQuantityComponent;
  let fixture: ComponentFixture<EditQuantityComponent>;
  let mockProducts = [{
    id: 1,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    imgSrc: "./assets/images/iphone-xs.png",
    name: "Iphone XS",
    price: 100,
    qty: 2
    }]
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ EditQuantityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditQuantityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add quantity', () => {
    component.productId = mockProducts[0].id;
    sessionStorage.setItem('cartSession',JSON.stringify(mockProducts))
    component.editQty('add');
    let cartSession = JSON.parse(sessionStorage.getItem('cartSession'));
    expect(cartSession[0].qty).toBeGreaterThan(1);
  });

  it('should remove quantity', () => {
   
    component.productId = mockProducts[0].id;
    sessionStorage.setItem('cartSession',JSON.stringify(mockProducts))
    component.editQty('remove');
    let cartSession = JSON.parse(sessionStorage.getItem('cartSession'));
    expect(cartSession[0].qty).toBeLessThanOrEqual(1);
  });
});
