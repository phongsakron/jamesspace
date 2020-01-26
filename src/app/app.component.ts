import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  nameWeb = 'jamesspace.online';

  @HostListener('window:scroll', ['$event'])
  @HostListener('window:wheel', ['$event'])

onWindowScroll(e) {  
    let element = document.querySelector('.nav');
    // console.log(window.pageYOffset, element.clientHeight);
    
    if (window.pageYOffset > element.clientHeight) {
      element.classList.add('navbar-inverse');
    } else {
      element.classList.remove('navbar-inverse');
    }
  }

  
}
