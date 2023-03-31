import { Component } from '@angular/core';

@Component({
  selector: 'app-fatura-item',
  templateUrl: './item-fatura.component.html',
  styleUrls: ['./item-fatura.component.css'],
})
export class ItemComponent {

  n_fatura!: string;
  d_fatura!: number;
  loja: string[] = ['Loja 1: NOS', 'Loja 2: Ageas', 'Loja 3: Fnac'];

  onSubmit() {
    console.log('Nº da fatura: ' + this.n_fatura);
    console.log('Data da fatura: ' + this.d_fatura);
    console.log('Loja: ' + this.loja);
  }
}
