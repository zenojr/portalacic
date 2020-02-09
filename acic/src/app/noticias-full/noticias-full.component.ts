import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-noticias-full',
  templateUrl: './noticias-full.component.html',
  styleUrls: ['./noticias-full.component.scss']
})
export class NoticiasFullComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
