import { Component, OnInit } from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';

@Component({
  selector: 'app-intranet',
  templateUrl: './intranet.component.html',
  styleUrls: ['./intranet.component.scss']
})
export class IntranetComponent implements OnInit {

  constructor( private storage: AngularFireStorage ) { }

  ngOnInit() {
  }

  uploadFile(event) {
    
    const file = event.target.files[0];
    const filePath = 'noticias';
    const task = this.storage.upload(filePath, file);

  }

}
