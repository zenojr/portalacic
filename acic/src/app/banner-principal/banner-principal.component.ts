import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';



@Component({
  
  selector: 'banner',
  templateUrl: './banner-principal.component.html',
  styleUrls: ['./banner-principal.component.scss']
})
export class BannerPrincipalComponent implements OnInit {
  count = 0;
  tabs = ['1º Notícia', 'Second', 'Third'];
  selected = new FormControl(this.count);


  constructor() {

   }

  ngOnInit() {
    this.changeTab();
  }

  addTab(selectAfterAdding: boolean) {
    this.tabs.push('New');

    if (selectAfterAdding) {
      this.selected.setValue(this.tabs.length - 1);
    }
  }

  changeTab() {
    setTimeout(() => {
      this.count = 1;
      alert(this.count);
     }, 3000);
  }

}