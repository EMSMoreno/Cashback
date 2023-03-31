import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore/';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Input() dados_pessoais: any[string] = [];
  dado_pessoal = null
  @Output() addProduct = new EventEmitter<any>()
  firestore: any;

  add(dados_pessoais: any) {
    dados_pessoais.qty = 1
    dados_pessoais.basket = true
    this.addProduct.emit(dados_pessoais)

    this.firestore.collection('cashbacks').add({
      id: dados_pessoais.nif,
      name: dados_pessoais.name,
      email: dados_pessoais.email
    }).then(() => {
      console.log('Dados adicionados à nossa base de dados Firestore! Muito obrigado!');
    }).catch((error: any) => {
      console.error('Error ao adicionar dados à nossa base de dados Firestore: ', error);
    });
  }

  constructor() { }

  ngOnInit() { }

}
