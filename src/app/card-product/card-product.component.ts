import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'card',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.scss']
})
export class CardProductComponent implements OnInit {

  constructor(private route: Router) { }

  goToProduct() {
    this.route.navigate(['/product']);
  }

  addTocart() {
    alert("Item adicionado ao carrinho!");
  }
  ngOnInit(): void {
  }

}
