import { Component, OnInit } from '@angular/core';
import { ListaProducts } from 'src/app/interfaces/product';
import { ActivatedRoute,Router,RouteReuseStrategy } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  ListaProducts=ListaProducts;
  ids:any;
  id:number=0;
  Product:any;

  constructor(public ruta:ActivatedRoute, public router:Router) {
    this.ruta.params.subscribe(datos=>{
      this.id=datos["id"];
    }
    )
    this.router.routeReuseStrategy.shouldReuseRoute = () => {
      return false;
    };
  }
  

  ngOnInit(): void {
    this.Product=ListaProducts.find(objeto=>objeto.id==this.id);
  }

}
