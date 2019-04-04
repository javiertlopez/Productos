import { Injectable } from '@angular/core';
import { Producto } from './Producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private productos: Producto[] = [
    new Producto(1, 'Zbook', 'hp', 'laptop', 15000, 8),
    new Producto(2, 'Zbook', 'hp', 'laptop', 15000, 8),
    new Producto(3, 'Zbook', 'hp', 'laptop', 15000, 8),
  ];

  constructor() { }

  getProductos(): Producto[] {
    return this.productos.slice();
  }
}
