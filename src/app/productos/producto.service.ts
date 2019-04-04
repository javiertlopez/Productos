import { Injectable } from '@angular/core';
import { Producto } from './Producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private productos: Producto[] = [
    new Producto(1, 'MacBook Pro', 'apple', 'laptop', 15000, 8),
    new Producto(2, 'MacBook Air', 'apple', 'laptop', 15000, 8),
    new Producto(3, 'MacBook', 'apple', 'laptop', 15000, 8),
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
}
