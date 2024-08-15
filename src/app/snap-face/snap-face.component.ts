import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { FaceSnap } from '../Models/Face-Snap';
import { CommonModule, DatePipe, LowerCasePipe, NgClass, NgStyle, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { PanierComponent } from '../panier/panier.component';
import { CartService } from '../services/card-services';
import { GlitterEffectComponent } from '../glitter/glitter.component';
import { Commentaire } from '../Models/Commentaire';
import { CommentairesComponent } from '../commentaire/commentaire.component';


@Component({
  selector: 'app-snap-face',
  standalone: true,
  imports: [
    NgStyle, NgClass, UpperCasePipe, LowerCasePipe, TitleCasePipe, DatePipe, PanierComponent, GlitterEffectComponent, CommonModule, CommentairesComponent],
  templateUrl: './snap-face.component.html',
  styleUrls: ['./snap-face.component.scss']
})
export class SnapFaceComponent implements OnInit {

  @Input() FaceSnap!: FaceSnap;
  SnapsButtonText!: string;
  NombreClick!: boolean;
  paniertext: string = 'Ajouter au panier';
  nbpanier: boolean = false;
  descriptionvisible: boolean = false;
  CommentaireVisible: boolean = false;
  faceSnaps: FaceSnap[] = [];
  commmentaire: Commentaire[] = [];

  @ViewChild('glitterContainer', { static: false }) glitter!: GlitterEffectComponent;

  private timer: any;
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.SnapsButtonText = 'Liker';
    this.NombreClick = false;
  }

  onSnap(): void {
    if (this.NombreClick) {
      this.RemoveOnsnap();
    } else {
      this.AddOnSnap();
    }
  }

  RemoveOnsnap(): void {
    this.FaceSnap.snaps--;
    this.SnapsButtonText = 'Liker';
    this.NombreClick = false;
  }

  AddOnSnap(): void {
    this.FaceSnap.snaps++;
    this.SnapsButtonText = 'À Liker';
    this.NombreClick = true;
  }

  panier(): void {
    if (this.nbpanier) {
      this.removepanier();
    } else {
      this.addpanier();
    }
  }

  addpanier(): void {
    this.paniertext = 'Dans le panier';
    this.nbpanier = true;
    this.cartService.addItem();
    this.FaceSnap.showglitter = true;

    setTimeout(() => {
      if (this.glitter) {
        this.glitter.createGlitter();
      }
    }, 0);

    // Optionally reset the glitter effect after some time
    setTimeout(() => {
      this.FaceSnap.showglitter = false;
    }, 2000); // Adjust time as necessary
  }

  removepanier(): void {
    this.paniertext = 'Ajouter au panier';
    this.nbpanier = false;
    this.cartService.removeItem();
  }
  toggleBodyScroll(): void {
    if (this.descriptionvisible || this.CommentaireVisible) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }

  AffichageDescription(): void {
    this.descriptionvisible = !this.descriptionvisible;
    this.toggleBodyScroll();
  }

  croix(): void {
    this.descriptionvisible = false;
    this.CommentaireVisible = false;
    this.toggleBodyScroll();
  }

  showTrailer(faceSnap: FaceSnap): void {
    faceSnap.showSpinner = false;
    setTimeout(() => {
      faceSnap.showSpinner = true; // Masque le spinner après 2 secondes
      if (!faceSnap.trailerShown) {
        window.open(faceSnap.trailer, '_blank');
        faceSnap.TrailerVisible = true;
        faceSnap.trailerShown = true;
        setTimeout(() => {
          this.hideTrailer(faceSnap);
        }, 0);
      }
    }, 2000); // VISIBILITE SPINNER
  }
  
  hideTrailer(faceSnap: FaceSnap): void {
    clearTimeout(this.timer);
    faceSnap.TrailerVisible = false;
    faceSnap.trailerShown = false;
    faceSnap.showSpinner = true;
  }
  // Affiche un message
  showmessage(faceSnap: FaceSnap): void {
    faceSnap.MessageVisibile = true;
  }

  hidemessage(faceSnap: FaceSnap): void {
    faceSnap.MessageVisibile = false;
  }
  //Commentaire
  AffichageCommentaire(){
    this.CommentaireVisible = !this.CommentaireVisible;
    this.toggleBodyScroll();
  }
  
}
