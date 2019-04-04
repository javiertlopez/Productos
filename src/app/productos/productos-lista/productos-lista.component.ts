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
  productos: Producto[];

  constructor(
    private productoService: ProductoService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.productos = this.productoService.getProductos();
    this.isProduct = this.router.url.slice(1) === 'productos' ? true : false ;
  }

  productoHandler(prod) {
    console.log(prod.id);
    this.router.navigate([prod.id, 'edit'], { relativeTo: this.route });
  }
}
