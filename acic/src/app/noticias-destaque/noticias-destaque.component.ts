import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-noticias-destaque',
  templateUrl: './noticias-destaque.component.html',
  styleUrls: ['./noticias-destaque.component.scss']
})
export class NoticiasDestaqueComponent implements OnInit {

  noticias: Observable<any[]>;

  constructor( public db: AngularFirestore ) { }

  ngOnInit() {

    this.noticias = this.db.collection('noticias').valueChanges();

    console.log(this.noticias);

  }

}
