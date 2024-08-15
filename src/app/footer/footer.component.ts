import { NgFor, NgStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [ NgStyle, NgFor],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent{
  socialMediaLinks : {url: string, imgUrl: string, alt: string}[] =  [];
 
  constructor() {
      this.socialMediaLinks = [
        { url: 'https://www.facebook.com', imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/6c/Facebook_Logo_2023.png', alt: 'Facebook' },
        { url: 'https://x.com', imgUrl: 'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/x-social-media-logo-icon.png', alt: 'X' },
        { url: 'https://www.instagram.com', imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/768px-Instagram_icon.png', alt: 'Instagram' }
    ];  
  }

  
}