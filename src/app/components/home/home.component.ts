import { Component, OnInit } from '@angular/core';
import { ListaProducts } from 'src/app/interfaces/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  ListaProducts=ListaProducts;

  constructor() { }

  ngOnInit(): void {
  }

}
