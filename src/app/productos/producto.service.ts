import { Injectable } from '@angular/core';
import { Producto } from './Producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private productos: Producto[] = [
    new Producto(1, 'MacBook Pro', 'apple', 'laptop', 4999, 8),
    new Producto(2, 'MacBook Air', 'apple', 'laptop', 1999, 8),
    new Producto(3, 'MacBook', 'apple', 'laptop', 2499, 8),
    new Producto(4, 'iPad', 'apple', 'tablet', 599, 8),
    new Producto(5, 'iPad Air', 'apple', 'tablet', 699, 8),
    new Producto(6, 'iPad Pro', 'apple', 'tablet', 899, 8),
    new Producto(4, 'iPhone XS', 'apple', 'phone', 999, 8),
    new Producto(5, 'iPhone XS Max', 'apple', 'phone', 1099, 8),
    new Producto(6, 'iPhone XR', 'apple', 'phone', 699, 8),
  ];

  private carrito: Producto[] = [];

  constructor() { }

  getProductos(): Producto[] {
    return this.productos.slice();
  }

  getCarrito(): Producto[] {
    return this.carrito.slice();
  }

  setCarrito(selProd: Producto[]) {
    this.carrito = selProd;
  }

  getTotalCarrito() {
    let total = 0;
    this.carrito.forEach(item => total += item.precio);

    return total;
  }
}
