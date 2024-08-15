import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-glitter',
  standalone: true,
  templateUrl: './glitter.component.html',
  styleUrls: ['./glitter.component.scss']
})
export class GlitterEffectComponent {
  @ViewChild('glitterContainer', { static: true }) glitterContainer!: ElementRef;

  constructor() { }

  createGlitter(): void {
    console.log('createGlitter called');
    const numGlitters = 30;
    const glitterContainer = this.glitterContainer.nativeElement;
    for (let i = 0; i < numGlitters; i++) {
      const glitter = document.createElement('div');
      glitter.className = 'glitterContainer';
      glitter.style.left = `${Math.random() * glitterContainer.clientWidth}px`;
      glitter.style.top = `${Math.random() * glitterContainer.clientHeight}px`;
      glitterContainer.appendChild(glitter);
    }
  }
  
}
