import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Favorite Photos';
  image1 = 'https://www.launchcode.org/assets/icons/target-00c7a0bc7776901e3c5cdc4c36c465f19e41a249bc7267a595f0bfa14ab944b7.png';
  image2 = 'https://cdn.pixabay.com/photo/2016/04/18/22/05/sea-1337565__340.jpg';
  image3 = 'https://media.istockphoto.com/photos/shrimp-street-tacos-picture-id1200136076?b=1&k=6&m=1200136076&s=170667a&w=0&h=fhLFL-P66KifMk7iy51zn9qLt9XxhEHfbHyw2FtbVqs=';

  constructor() { }

  ngOnInit() {
  }

}