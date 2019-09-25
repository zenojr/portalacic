import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

export interface Banner {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

const bgColor = "red";

@Component({

  selector: 'banner',
  templateUrl: './banner-principal.component.html',
  styleUrls: ['./banner-principal.component.scss']
})
export class BannerPrincipalComponent implements OnInit {

  tabs = ['1º Notícia', 'Second', 'Third'];
  selected = 0;

  tiles: Banner[] = [
    {text: 'One', cols: 2, rows: 2, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 1, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];

  constructor() {

   }

  ngOnInit() {
    this.autoChangeTab();
  }

  autoChangeTab() {

    setInterval(() => {

    if (this.selected === 0) {
      this.selected = 1;
    } else if ( this.selected === 1 ) {
      this.selected = 2;
    } else if ( this.selected === 2  ) {
      this.selected = 0;
    }
    }, 7000);

  }

}