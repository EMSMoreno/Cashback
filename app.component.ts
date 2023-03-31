import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  list: any[] = [];

  cart: any[] = [];
  //array que recebe os dados do list

  constructor() {
    this.list = [
      { id: 1, produto: 'Produto_1', preco_final: 0 },
      { id: 2, produto: 'Produto_2', preco_final: 1 },
      { id: 3, produto: 'Produto_3', preco_final: 2 },
      { id: 4, produto: 'Produto_4', preco_final: 3 },
    ]
    this.save('list', this.list)
  }

  load() {
    const list = localStorage.getItem('list');
    this.list = list ? JSON.parse(list) : this.list = [];
  }

  save(produto: string, preco_final: any[]) {
    localStorage.setItem(produto, JSON.stringify(preco_final));
  }

  addPrd(produto: any) {
    this.cart = [...this.cart, produto]
    this.save('cart', this.cart)
    console.log(produto)
  } // btn adicionar produto

  removeItem(index: number) {
    this.cart.splice(index, 1)
    this.save('cart', this.cart)
  } // btn remover produto

  setItem(produto: any, index: number) {
    const _listacompleta = [...this.cart];
    _listacompleta[index] = produto;
    this.cart = _listacompleta;
    if (!produto.basket) this.cart.splice(index, 1)
    this.save('cart', this.cart);
  }

}