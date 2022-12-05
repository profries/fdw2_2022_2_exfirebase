import { Component } from '@angular/core';
import { collectionData } from '@angular/fire/firestore';
import { Firestore, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

interface Produto {
  nome: String,
  preco: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {  
  title = 'crud-produtos-firebase';
  produtos$!: Observable<any[]>;
  
  constructor(private firestore: Firestore) {
     const data = collection(firestore, 'produtos');
     this.produtos$ = collectionData(data);
  }
}
