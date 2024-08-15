// /components/commentaires/commentaires.component.ts
import { Component, Input, OnInit } from '@angular/core';
import { Commentaire } from '../Models/Commentaire';
import { CommentaireService } from '../services/commentaire.services';
import { CommonModule, DatePipe } from '@angular/common';
import { FaceSnap } from '../Models/Face-Snap';
import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
    selector: 'app-commentaires',
    standalone: true,
    imports: [DatePipe, CommonModule],
    templateUrl: './commentaire.component.html',
    styleUrls: ['./commentaire.component.scss']
})
export class CommentairesComponent implements OnInit {
    @Input() filmId!: number;
    @Input() FaceSnap!: FaceSnap;
    etoile!: string;
    commentaire: Commentaire[] = [];
    like: boolean = false;
    dislike: boolean = false;
    constructor(
      private faceSnapsService: FaceSnapsService,
      private commentaireService: CommentaireService
    ) { }

    ngOnInit(): void {
        this.commentaire = this.commentaireService.getCommentairesByFilmId(this.filmId);
        this.commentaire.forEach(c => {
          c.etoile = this.convertToStars(c.nbstar); });
    }
    // LIKE DANS COMMENTAIRE
    OnLike(commentaire: Commentaire): void {
      if (this.like) {
        this.RemoveLike(commentaire);
      } else {
        if (this.dislike) {
          this.RemoveDislike(commentaire);
          this.dislike = false;
        }
        this.AddLike(commentaire);
      }
      this.like = !this.like;
    }
  RemoveLike(commentaire: Commentaire): void {
    commentaire.Like--;
  }
  AddLike(commentaire: Commentaire): void {
    commentaire.Like++;
  }

  //DISLIKE COMMENTAIRE
  OnDislike(commentaire: Commentaire): void {
    if (this.dislike) {
      this.RemoveDislike(commentaire);
    } else {
      if (this.like) {
        this.RemoveLike(commentaire);
        this.like = false;
      }
      this.AddDislike(commentaire);
    }
    this.dislike = !this.dislike;
  }
  RemoveDislike(commentaire: Commentaire) : void{
    commentaire.DisLike--;
  }
  AddDislike(commentaire: Commentaire) : void{
    commentaire.DisLike++;
  }
  

  convertToStars(nbstar: number): string {
    switch (nbstar) {
      case 1:
        return "⭐";
      case 2:
        return "⭐⭐";
      case 3:
        return "⭐⭐⭐";
      case 4:
        return "⭐⭐⭐⭐";
      case 5:
        return "⭐⭐⭐⭐⭐";
      default:
        return "";
    }
    }
}