import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {
  favLinks = ['https://dev.w3.org/html5/html-author/charref', 'https://www.acds.co/'];
  constructor() { }

  ngOnInit() {
  }

}
