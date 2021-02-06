import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MockService {

  _updateCartItems = new Subject<any>();
  updateCartItems = this._updateCartItems.asObservable();


  _updateCartTotal = new Subject<any>();
  updateCartTotal = this._updateCartTotal.asObservable();

  _updateCartCount = new Subject<any>();
  updateCartCount = this._updateCartCount.asObservable();

  constructor(private http: HttpClient) { }



  getMockProducts() {
    return this.http.get(environment.mockProducts)
  }


  addToCart(product) {
    let productObj = { ...product, qty: 1 };

    if (this.getCartSession()) {
      let cartSession = this.getCartSession();
      let productIndex = cartSession.findIndex(data => data.id === productObj.id);
      if (cartSession && cartSession[productIndex]) {
        cartSession[productIndex].qty += productObj.qty;
        this.setCartSession(cartSession);
      } else {
        cartSession.push(productObj);
        this.setCartSession(cartSession);
      }
    } else {
      this.setCartSession([productObj]);
    }
    this.getCartCount();
  }

  getCartCount(){
    this._updateCartCount.next(true);
  }

  getCartSession() {
    return sessionStorage.getItem('cartSession') ? JSON.parse(sessionStorage.getItem('cartSession')) : null;
  }


  setCartSession(products) {

    sessionStorage.setItem('cartSession', JSON.stringify(products))

  }

  removeItem(productId) {
    if (this.getCartSession()) {
      let cartSession = this.getCartSession();
      let productIndex = cartSession.findIndex(data => data.id === productId);
      if (cartSession && productIndex >= 0) {
        cartSession.splice(productIndex, 1);
        this.setCartSession(cartSession);
      }

    }
  }

  updateCart(productId, quantity = 1) {
    if (this.getCartSession()) {
      let cartSession = this.getCartSession();
      let productIndex = cartSession.findIndex(data => data.id === productId);
      if (cartSession && cartSession[productIndex]) {
        cartSession[productIndex].qty += quantity;
        this.setCartSession(cartSession);
      }

    }

  }

  refreshCart() {
    this.getCartCount();
    this._updateCartItems.next(true);
  }

  refreshCartTotal() {
    this._updateCartTotal.next(true);
  }


  setSelectedItems(id) {
    if (sessionStorage.getItem('selectedItems')) {
      let selectedItems = JSON.parse(sessionStorage.getItem('selectedItems'));
      let itemIndex = selectedItems.indexOf(id);
      if (itemIndex >= 0) {
        selectedItems.splice(itemIndex, 1);
      } else {
        selectedItems.push(id);
      }
      sessionStorage.setItem('selectedItems', JSON.stringify(selectedItems));
    } else {
      sessionStorage.setItem('selectedItems', JSON.stringify([id]));
    }

  }

  getSelectedItems() {
    let cartBreakdown = [];
    if (sessionStorage.getItem('selectedItems') && this.getCartSession()) {
      let selectedItems = JSON.parse(sessionStorage.getItem('selectedItems'));
      let cartSession = this.getCartSession();
      // let productIndex = cartSession.findIndex(data => data.id === productId);
      selectedItems.forEach(data => {
        let cartIndex = cartSession.findIndex(cart => cart.id === data);
        if (cartIndex >= 0) {
          cartBreakdown.push(cartSession[cartIndex]);
        }
      });

    }
    return cartBreakdown;
    // return sessionStorage.getItem('selectedItems') ? JSON.parse(sessionStorage.getItem('selectedItems')) : null;
  }


  getSelectedProductIds() {
    return sessionStorage.getItem('selectedItems') ? JSON.parse(sessionStorage.getItem('selectedItems')) : [];
  }

  removeSelectedItems() {
    if (sessionStorage.getItem('selectedItems')) {
      sessionStorage.removeItem('selectedItems');
    }
  }

  removeSelectedItemIndex(id){
    if (sessionStorage.getItem('selectedItems')) {
      let selectedItems = JSON.parse(sessionStorage.getItem('selectedItems'));
      let itemIndex = selectedItems.indexOf(id);
      if (itemIndex >= 0) {
        selectedItems.splice(itemIndex, 1);
      } 
      sessionStorage.setItem('selectedItems', JSON.stringify(selectedItems));
    } 
  }


  getSelectedIds() {
    let idArray = this.getSelectedProductIds();
    setTimeout(() => {
      if (idArray.length > 0) {
        idArray.forEach(data => {
          if (document.getElementById('check-' + data)) {
            document.getElementById('check-' + data).setAttribute('checked','checked');
          }
        }, 500);


        sessionStorage.setItem('selectedItems', JSON.stringify(idArray));
      }

    });
  }


}
