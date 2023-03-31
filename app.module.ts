import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TotalComponent } from './total/total.component';
import { ItemComponent } from './item-fatura/item-fatura.component';
import { FormComponent } from './form/form.component';
import { FirebaseAnexarComponent } from './firebase-anexar/firebase-anexar.component';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore/';

import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    TotalComponent,
    ItemComponent,
    FormComponent,
    FirebaseAnexarComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
