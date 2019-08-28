import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';



@Component({
  
  selector: 'banner',
  templateUrl: './banner-principal.component.html',
  styleUrls: ['./banner-principal.component.scss']
})
export class BannerPrincipalComponent implements OnInit {
  
  tabs = ['1º Notícia', 'Second', 'Third'];
  selected = 0;


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
      console.log(this.selected);
    }, 7000);

  }

}