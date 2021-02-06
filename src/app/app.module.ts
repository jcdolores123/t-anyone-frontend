import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { AddToCartComponent } from './components/add-to-cart/add-to-cart.component';
import { CartItemsComponent } from './components/cart-items/cart-items.component';
import { EditQuantityComponent } from './components/edit-quantity/edit-quantity.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CartComponent,
    CheckoutComponent,
    HeaderComponent,
    FooterComponent,
    ProductListComponent,
    ProductCardComponent,
    AddToCartComponent,
    CartItemsComponent,
    EditQuantityComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }
