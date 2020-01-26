import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AngularFireStorage } from '@angular/fire/storage';



@Component({
  selector: 'app-noticias-destaque',
  templateUrl: './noticias-destaque.component.html',
  styleUrls: ['./noticias-destaque.component.scss']
})
export class NoticiasDestaqueComponent implements OnInit {

  noticias: Observable<any[]>;

  constructor( public       db: AngularFirestore,
               private storage: AngularFireStorage ) { }

  ngOnInit() {

    this.noticias = this.db.collection('noticias', data => data.orderBy('titulo').limitToLast(3) ).valueChanges();

    console.log(this.noticias);

  }

}
