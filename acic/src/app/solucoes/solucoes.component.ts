import { Component, OnInit } from '@angular/core';


export interface Banner {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-solucoes',
  templateUrl: './solucoes.component.html',
  styleUrls: ['./solucoes.component.scss']
})
export class SolucoesComponent implements OnInit {

  textoSolution = '';
  auditText = 'Texto para o auditorio da acic';
  certDigText = 'Texto da cert digitalllll';

  tabs = ['1º Notícia', 'Second', 'Third'];
  selected = 0;

  solution = false;

  tiles: Banner[] = [
    {text: 'One', cols: 2, rows: 2, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 1, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];

  constructor() { }

  ngOnInit() {
    this.autoChangeTab();
  }


  controlSolution(value?) {

    console.log(value);
    if( value === 'audit') {
      this.textoSolution = this.auditText;
    } else if( value === 'certDig' ) {
      this.textoSolution = this.certDigText;
    } else {
      this.textoSolution = 'no data';
    }

    if ( this.solution === false ) {
      this.solution = true;
    } else if ( this.solution === true ){
      this.solution = false;
    }
  }

  autoChangeTab() {
    setInterval(() => {
    if (this.selected === 0) {
      this.selected = 1;
    } else if ( this.selected === 1 ) {
      this.selected = 2;
    } else if ( this.selected === 2 ) {
      this.selected = 3;
    } else if ( this.selected === 3 ) {
      this.selected = 0;
    }
    }, 5000);
  }

}
