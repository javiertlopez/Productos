import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../producto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from '../Producto';

@Component({
  selector: 'app-productos-lista',
  templateUrl: './productos-lista.component.html',
  styleUrls: ['./productos-lista.component.css']
})
export class ProductosListaComponent implements OnInit {
  isProduct: boolean;
  cant = 0;
  productos: Producto[];
  carrito: Producto[];
  carritoTotal = 0;
  selProd: Producto[] = [];

  constructor(
    private productoService: ProductoService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.productos = this.productoService.getProductos();
    this.carrito = this.productoService.getCarrito();
    this.isProduct = this.router.url.slice(1) === 'productos' ? true : false ;
    this.carritoTotal = this.productoService.getTotalCarrito();
  }

  productoHandler(action, prod) {
    if (action) {
      this.selProd.push(prod);
      this.cant ++;
    } else {
      this.selProd.splice(this.selProd.findIndex(item => item.id = prod.id), 1);
      this.cant --;
    }
  }

  addCart() {
    this.productoService.setCarrito(this.selProd);
  }
}

