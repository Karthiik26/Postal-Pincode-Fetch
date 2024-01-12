import { Component, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  ShowModal:any=false;

  HamburgShow(){
    this.ShowModal=true
  }

  cancel(){
    this.ShowModal=false;
  }

  showoption1:any=false;

  show1(){
    if (this.showoption1==false) {
      this.showoption1=true;
    } else {
      this.showoption1=false;
    }
  }

}
